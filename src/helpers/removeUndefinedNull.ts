export function removeUndefinedNull(obj: unknown): Record<string, unknown> {
  const newObj = {};

  Object.keys(obj).forEach(key => {
    if (obj[key] === undefined || obj[key] === null) {
      return;
    }

    newObj[key] = obj[key];
  });

  return newObj;
}
