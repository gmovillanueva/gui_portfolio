export const sanitizeJSON = (entries) => {
  return Object.entries(entries).reduce((result, [, value]) => {
    if (value.fields) {
      delete value.fields.companyImage.metadata;
      delete value.fields.companyImage.sys;
      delete value.fields.companyImage.environment;
      result.push({ ...value.fields });
    }

    return result;
  }, []);
};
