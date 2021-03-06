export function generateTitle(title) {
  const hasKey = this.$te('route.' + title);
  const translatedTitle = this.$t('route.' + title);

  if (hasKey) {
    return translatedTitle;
  }
  return title;
}
