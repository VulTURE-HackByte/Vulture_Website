import React from 'react';
import PropTypes from 'prop-types';

const DownloadButton = ({ data, fileName }) => {
  const handleDownload = () => {
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <button onClick={handleDownload}>Download</button>;
};

export default DownloadButton;

DownloadButton.propTypes = {
  data: PropTypes.object.isRequired,
  fileName: PropTypes.string.isRequired,
};
