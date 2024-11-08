import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"

    >
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
        <circle cx="20" cy="20" r="20" />
    </ContentLoader>
);

export default Skeleton;