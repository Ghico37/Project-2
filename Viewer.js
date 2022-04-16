// ./src/components/Viewer.js

// Imports
import React from "react";
/*
// Viewer segment container
export default function Viewer({ svgData }) {
    // Contains the SVG display structure for the application

    // Returns a JSX component for the SVG display
    // neccessary for HMTL elements to be placed into the DOM
    return (
        <>
            <h1>This is the viewer!</h1>
        </>
    );
}// ./src/components/Viewer.js
*/
// Viewer segment container
export default function Viewer({ svgData }) {
    // Contains the SVG display structure for the application

    // Returns a JSX component for the SVG display
    return (
        <>
            <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent(svgData)}`}
                alt="SVG currently being displayed"
                style={{
                    maxWidth: 420, // Stop the SVG from expanding to the moon
                }}
            />
        </>
    );
}
// makes sure the SVG file is scalable and does not lose quality when zooming in
// According to local host, my issues are on line 19 here, parsing issues