RegExp.escape = function escapeRegex (criteria) {
  return criteria.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
}