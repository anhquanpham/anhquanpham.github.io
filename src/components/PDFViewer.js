import React from 'react';
import PropTypes from 'prop-types';

/**
 * Converts a Google Drive share link to a preview URL for embedding
 * @param {string} driveLink - Google Drive share link
 * @returns {string} - Preview URL for iframe embedding
 */
const convertDriveLinkToPreview = (driveLink) => {
  if (!driveLink) return '';

  // Extract file ID from various Google Drive link formats
  let fileId = '';

  // Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  const match1 = driveLink.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match1) {
    const [, id] = match1;
    fileId = id;
  }

  // Format: https://drive.google.com/open?id=FILE_ID
  if (!fileId) {
    const match2 = driveLink.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (match2) {
      const [, id] = match2;
      fileId = id;
    }
  }

  // If it's already a preview link or direct PDF, return as is
  if (driveLink.includes('/preview') || driveLink.endsWith('.pdf')) {
    return driveLink;
  }

  // If we found a file ID, convert to preview URL
  if (fileId) {
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }

  // If no file ID found, return original link (might be a direct PDF URL)
  return driveLink;
};

/**
 * PDF Viewer component that works with Google Drive links
 * @param {string} src - Google Drive share link or direct PDF URL
 * @param {string} title - Title for the PDF viewer
 * @param {number} height - Height of the iframe (default: 800px)
 * @param {string} className - Additional CSS classes
 */
const PDFViewer = ({
  src, title = 'PDF Document', height = 800, className = '',
}) => {
  const previewUrl = convertDriveLinkToPreview(src);

  if (!previewUrl) {
    return null;
  }

  return (
    <div className={`pdf-container ${className}`} style={{ marginTop: '20px' }}>
      {title && <h3>{title}</h3>}
      <iframe
        src={previewUrl}
        width="100%"
        height={`${height}px`}
        style={{ border: 'none' }}
        title={title}
      />
    </div>
  );
};

PDFViewer.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  height: PropTypes.number,
  className: PropTypes.string,
};

PDFViewer.defaultProps = {
  title: 'PDF Document',
  height: 800,
  className: '',
};

export default PDFViewer;
export { convertDriveLinkToPreview };
