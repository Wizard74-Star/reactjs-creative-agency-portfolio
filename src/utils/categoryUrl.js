// Helper function to encode category for URL (handles forward slashes)
export const encodeCategoryForURL = (category) => {
  return encodeURIComponent(category).replace(/\//g, '%2F');
};

// Helper function to decode category from URL
export const decodeCategoryFromURL = (encodedCategory) => {
  if (!encodedCategory) return '';
  try {
    // Remove any query parameters first
    const cleanCategory = encodedCategory.split('?')[0];
    return decodeURIComponent(cleanCategory.replace(/%2F/g, '/'));
  } catch (e) {
    return encodedCategory;
  }
};

