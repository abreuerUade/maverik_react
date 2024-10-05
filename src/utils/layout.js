export const toggleDocumentAttribute = (attribute, value, tag = 'html', remove = false) => {
  if (document.body) {
    const element = document.getElementsByTagName(tag.toString())[0];
    const hasAttribute = element.getAttribute(attribute);
    if (remove && hasAttribute) {
      element.removeAttribute(attribute);
      return;
    } else element.setAttribute(attribute, value);
  }
};