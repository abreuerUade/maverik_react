import { getAxiosClient, tokenName } from "@/services/shared/http_client";
import { useAuthContext } from '@/states/useAuthContext';
import { useNotificationContext } from '@/states/useNotificationContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as yup from 'yup';
import storage from "@/services/shared/storage";

const useSignIn = () => {
  const api = getAxiosClient();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    saveSession,
    removeSession,
  } = useAuthContext();
  const [searchParams] = useSearchParams();
  const {
    showNotification
  } = useNotificationContext();
  const loginFormSchema = yup.object({
    email: yup.string().email('Coloca un correo electrónico válido').required('Coloca un correo electrónico'),
    clave: yup.string().required('Coloca una clave')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {}
  });
  const redirectUser = () => {
    const redirectLink = searchParams.get('redirectTo');
    if (redirectLink) navigate(redirectLink); else navigate('/wizard');
  };
  const login = handleSubmit(async values => {
    try {
      const res = await api.post('/user/login', values);
      console.log(res);
      if (res.data.access_token) {
        storage.clear();
        removeSession();
        saveSession({
          ...(res.data ?? {}),
          access_token: res.data.access_token
        });
        storage.set(tokenName, res.data.access_token);
        redirectUser();
        showNotification({
          message: 'Inicio de sesión exitoso. Bienvenido. Redirigiendo ...',
          type: 'success'
        });
      } else {
        const { error } = res.data;
        if (error === "wrong credentials") {
          showNotification({
            message: 'Credenciales incorrectas. Intenta nuevamente.',
            type: 'warning'
          });
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e) {
      if (e.response?.data?.error) {
        showNotification({
          message: `${e.response?.data?.error}`,
          type: 'danger'
        });
      }
    } finally {
      setLoading(false);
    }
  });
  return {
    loading,
    login,
    control
  };
};
export default useSignIn;