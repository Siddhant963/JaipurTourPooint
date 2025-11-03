"use client";
import React from 'react';
import Navbar from '@/Components/Navbar';

const TestNavbar = () => {
    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: '100px', padding: '20px' }}>
                <h1>Navbar Test Page</h1>
                <p>This page is used to test the navbar functionality.</p>
                <div style={{ height: '200vh', background: 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)' }}>
                    <p>Scroll down to test the navbar scroll effect...</p>
                </div>
            </div>
        </div>
    );
};

export default TestNavbar;