// Copyright (c) 2025 Catherine Vu All rights reserved
//
// Created by: Catherine Vu
// Created on: March 27 2025
// This file contains the JS functions for index.html


/**
* Enter base A and B and height
*/

function calculateTrapezoidArea() {
            let a = parseFloat(document.getElementById('baseA').value);
            let b = parseFloat(document.getElementById('baseB').value);
            let h = parseFloat(document.getElementById('height').value);
            if (!isNaN(a) && !isNaN(b) && !isNaN(h)) {
                let area = ((a + b) / 2) * h;
                document.getElementById('area').innerText = `Area is: ${area} mm²`;
            } else {
                document.getElementById('area').innerText = 'Please enter valid numbers';
            }
        }
