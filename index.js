/* ./src/index.css */

/* Screw writing CSS */
import '~antd/dist/antd.css'

// ./src/App.js

// Imports
import React, { useState } from "react";
import { Divider } from "antd";
import GUN from "gun";
// Components
import TitleSegment from "./components/TitleSegment";
import Viewer from "./components/Viewer";
import SVGUploadForm from "./components/SVGUploadForm";

export default function App() {
    // Contains all individual components as well as GUN instance and control

    // Returns a JSX component for the overall application
    return (
        <div
            style={{
                textAlign: "center",
            }}
        >
            <TitleSegment />
            <Divider />
            <Viewer />
            <Divider />
            <SVGUploadForm />
        </div>
    );
}

