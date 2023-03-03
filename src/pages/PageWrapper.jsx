import React, { useEffect } from "react";

const PageWrapper = ({ title, classWrapper, children }) => {
    useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, []);
    return <div className={`container ${classWrapper}`}>{children}</div>;
};

export default PageWrapper;
