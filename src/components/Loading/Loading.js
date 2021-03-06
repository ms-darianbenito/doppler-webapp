import React from 'react';

export const Loading = ({ page }) => {
  if (page) {
    return (
      <div className="wrapper-loading">
        <div className="loading-page" />
      </div>
    );
  }
  return <div className="loading-box" />;
};
