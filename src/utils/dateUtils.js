/**
 * Date calculation and formatting utilities for experience tenure.
 * Calculates duration dynamically based on current client date.
 */

/**
 * Calculates the duration between a start date and an end date (or present).
 * Uses inclusive month calculation conforming to industry/LinkedIn standards.
 * 
 * @param {string} startDateStr - Format 'YYYY-MM' (e.g. '2026-09')
 * @param {string|null} endDateStr - Format 'YYYY-MM' or null
 * @param {boolean} isPresent - Whether the position is currently held
 * @returns {string} Human-readable duration string (e.g. '2 mos', '1 yr 3 mos')
 */
export const calculateDuration = (startDateStr, endDateStr = null, isPresent = false) => {
  if (!startDateStr) return '';

  const [startYear, startMonth] = startDateStr.split('-').map(Number);
  if (isNaN(startYear) || isNaN(startMonth)) return '';

  const now = new Date();
  let endYear = now.getFullYear();
  let endMonth = now.getMonth() + 1; // 1-indexed (1 to 12)

  if (!isPresent && endDateStr) {
    const [parsedEndYear, parsedEndMonth] = endDateStr.split('-').map(Number);
    if (!isNaN(parsedEndYear) && !isNaN(parsedEndMonth)) {
      endYear = parsedEndYear;
      endMonth = parsedEndMonth;
    }
  }

  // Inclusive month calculation:
  // e.g., Sep 2026 (month 9) to Oct 2026 (month 10) = (2026 - 2026) * 12 + (10 - 9) + 1 = 2 months
  let totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;

  if (totalMonths <= 0) {
    totalMonths = 1;
  }

  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  const parts = [];
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`);
  }
  if (remainingMonths > 0) {
    parts.push(`${remainingMonths} ${remainingMonths === 1 ? 'mo' : 'mos'}`);
  }

  return parts.length > 0 ? parts.join(' ') : '1 mo';
};

/**
 * Formats a 'YYYY-MM' string into short month and year (e.g. 'Sep 2026').
 * 
 * @param {string} dateStr - Format 'YYYY-MM'
 * @returns {string} Formatted date
 */
export const formatDisplayDate = (dateStr) => {
  if (!dateStr) return '';
  const [year, month] = dateStr.split('-').map(Number);
  if (isNaN(year) || isNaN(month)) return dateStr;

  // Use explicit UTC/local safe date construction
  const date = new Date(year, month - 1, 1);
  return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
};
