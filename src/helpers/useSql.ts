const PARAM_PATTERN = /:([a-zA-Z]*)/;

/**
 * It must be used when the SQL statement needs to use a value in a query and that value is a key in an object.
 * @param {string} value - The query with the object key with ':' prefix.
 * @param {Record<string, unknown>} params - The object that will be used to replace key with the value.
 * @returns {string} - The query with the values.
 * @example
 * useSql('SELECT * FROM TABLE_NAME WHERE id = :id', { id: 'uuid-3d3' });
 * // returns SELECT * FROM TABLE_NAME WHERE id = uuid-3d3
 */
export const useSql = (value: string, params?: Record<string, unknown>): string => {
  if (!params) {
    return value;
  }

  let interpolatedSql = '';

  const replaceParamWithValue = (sql: string): string => {
    try {
      const paramMatches = sql.match(PARAM_PATTERN)?.map(match => match.replace(':', ''));

      if (!paramMatches) {
        return interpolatedSql;
      }

      paramMatches.forEach(param => {
        interpolatedSql = sql.replace(`:${param}`, params[param] as string);
      });

      return replaceParamWithValue(interpolatedSql);
    } catch (e) {
      return value;
    }
  };

  return replaceParamWithValue(value);
};
