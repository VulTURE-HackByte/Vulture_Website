import React from 'react';
import PropTypes from 'prop-types';

const DownloadButton = ({ fileUrl, fileName }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };

  return <button onClick={handleDownload}>Download</button>;
};

DownloadButton.propTypes = {
  fileUrl: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
};

export default DownloadButton;
