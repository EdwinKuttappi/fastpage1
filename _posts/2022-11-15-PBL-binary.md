---
title: Binary Math
toc: false
layout: default
description: A Binary Math illustrative application using HTML, Liquid, and JavaScript.
permalink: /frontend/binary
image: /images/Binary-Math.jpg
categories: [week13, tri2]
---

<!-- Hack 1: add a character display to text when 8 bits, determine if printable or not printable -->
<!-- Hack 2: change to 24 bits and add a color code and display color when 24 bits, think about display on this one -->
<!-- Hack 3: do your own thing -->

{% assign BITS = 8 %}

<style>
.table {
    border-color: red;
}
</style>
<div class="container bg-primary">
    <header class="pb-3 mb-4 border-bottom border-primary text-dark">
        <span class="fs-4">Binary Math and Characters with Conversions</span>
    </header>
    <div class="row justify-content-md-center">
        <div class="col-8">
            <table class="table">
            <tr id="table">
                <th>Plus</th>
                <th>Binary</th>
                <th>Octal</th>
                <th>Hexadecimal</th>
                <th>Decimal</th>
                <th>Character</th>
                <th>Minus</th>
            </tr>
            <tr>
                <td><button type="button" id="add1" onclick="add(1)">+1</button></td>
                <td id="binary">00000000</td>
                <td id="octal">0</td>
                <td id="hexadecimal">0</td>
                <td id="decimal">0</td>
                <td id ="character">Not Characterizable</td>
                <td><button type="button" id="sub1" onclick="add(-1)">-1</button></td>
            </tr>
            </table>
        </div>
        <div class="col-12">
            {% comment %}Liquid for loop includes last number, thus the Minus{% endcomment %}
            {% assign bits = BITS | minus: 1 %} 
            <table class="table">
            <tr>
                {% comment %}Build many bits{% endcomment %}
                {% for i in (0..bits) %}
                <td><img class="img-responsive py-3" id="bulb{{ i }}" src="{{site.baseurl}}/images/bulb_off.png" alt="" width="40" height="Auto">
                    <button type="button" id="butt{{ i }}" onclick="javascript:toggleBit({{ i }})">Turn on</button>
                </td>
                {% endfor %}
            </tr>
            <tr>
                {% comment %}Value of bit{% endcomment %}
                {% for i in (0..bits) %}
                <td><input type='text' id="digit{{ i }}" Value="0" size="1" readonly></td>
                {% endfor %}
            </tr>
            <table class="table">
            <tr id="table">
                <th>Plus</th>
                <th>Binary</th>
                <th>RGB</th>
                <th>Hexadecimal</th>
                <th>Minus</th>
            </tr>
    <header class="b-3 mb-4 border-bottom border-primary text-dark">
            <span class="fs-4">Colors made with Binary</span>
    </header>
            <tr>
                <td><button type="button" id="add2" onclick="add(1)">+1</button></td>
                <td id="binary">00000000</td>
                <td id="hexadecimal">0</td>
                <td id ="RGB"> - Color - </td>
                <td><button type="button" id="sub2" onclick="add(-1)">-1</button></td>
            </tr>
            <br>
            <tr>
                {% comment %}Build many bits{% endcomment %}
                {% for i in (0..bits) %}
                <td><img class="img-responsive py-3" id="bulb{{ i }}" src="{{site.baseurl}}/images/bulb_off.png" alt="" width="40" height="Auto">
                    <button type="button" id="butt{{ i }}" onclick="javascript:toggleBit({{ i }})">Turn on</button>
                </td>
                {% endfor %}
            </tr>
            <!--Add Java Table Data here-->
            </table>

<script>
    const BITS = {{ BITS }};
    const MAX = 2 ** BITS - 1;
    const MSG_ON = "Turn on";
    const IMAGE_ON = "{{site.baseurl}}/images/bulb_on.gif";
    const MSG_OFF = "Turn off";
    const IMAGE_OFF = "{{site.baseurl}}/images/bulb_off.png"

    // return string with current value of each bit
    function getBits() {
        let bits = "";
        for(let i = 0; i < BITS; i++) {
        bits = bits + document.getElementById('digit' + i).value;
        }
        return bits;
    }
     function getBitsRed() {
        let bits = "";
        for(let i = 0; i < BITS; i++) {
        bits = bits + document.getElementById('digit' + i).value;
        }
        return bits;
    }
     function getBitsGreen() {
        let bits = "";
        for(let i = 0; i < BITS; i++) {
        bits = bits + document.getElementById('digit' + i).value;
        }
        return bits;
    }
     function getBitsBlue() {
        let bits = "";
        for(let i = 0; i < BITS; i++) {
        bits = bits + document.getElementById('digit' + i).value;
        }
        return bits;
    }
    // setter for DOM values
    function setConversions(binary) {
        document.getElementById('binary').innerHTML = binary;
        // Octal conversion
        document.getElementById('octal').innerHTML = parseInt(binary, 2).toString(8);
        // Hexadecimal conversion
        document.getElementById('hexadecimal').innerHTML = parseInt(binary, 2).toString(16);
        // Decimal conversion
        document.getElementById('decimal').innerHTML = parseInt(binary, 2).toString();
    }
        else {
            document.getElementById('character').innerHTML = "Not Characterizable";
        }
    //
    function decimal_2_base(decimal, base) {
        let conversion = "";
        // loop to convert to base
        do {
        let digit = decimal % base;
        conversion = "" + digit + conversion; // what does this do?
        decimal = ~~(decimal / base);         // what does this do?
        } while (decimal > 0);                  // why while at the end? what is ~~?
        // loop to pad with zeros
        if (base === 2) {                        // only pad for binary conversions
        for (let i = 0; conversion.length < BITS; i++) {
            conversion = "0" + conversion;
        }
        return conversion;
    }
    // toggle selected bit and recalculate
    function toggleBit(i) {
        //alert("Digit action: " + i );
        const dig = document.getElementById('digit' + i);
        const image = document.getElementById('bulb' + i);
        const butt = document.getElementById('butt' + i);
        // Change digit and visual
        if (image.src.match(IMAGE_ON)) {
        dig.value = 0;
        image.src = IMAGE_OFF;
        butt.innerHTML = MSG_ON;
        } else {
        dig.value = 1;
        image.src = IMAGE_ON;
        butt.innerHTML = MSG_OFF;
        }
        // Binary numbers
        const binary = getBits();
        setConversions(binary);
    }
    // add is positive integer, subtract is negative integer
    function add(n) {
        let binary = getBits();
        // convert to decimal and do math
        let decimal = parseInt(binary, 2);
        if (n > 0) {  // PLUS
        decimal = MAX === decimal ? 0 : decimal += n; // OVERFLOW or PLUS
        } else  {     // MINUS
        decimal = 0 === decimal ? MAX : decimal += n; // OVERFLOW or MINUS
        }
        // convert the result back to binary
        binary = decimal_2_base(decimal, 2);
        // update conversions
        setConversions(binary);
        // update bits
        for (let i = 0; i < binary.length; i++) {
        let digit = binary.substr(i, 1);
        document.getElementById('digit' + i).value = digit;
        if (digit === "1") {
            document.getElementById('bulb' + i).src = IMAGE_ON;
            document.getElementById('butt' + i).innerHTML = MSG_OFF;
        } 
    }
</script>

<div class="container bg-primary">
    <form>
        <div class="form-group row">
            Type a decimal number and press tab to convert to binary:
            <div>
                <input onblur="convert()" type="text" name="decimal" id="decimal"/><br>
            </div>
        </div>
        <div class="form-group row">
            Binary : <span id="binary" ></span>
        </div>
    </form>
</div>

<script>
    function convert(){
        var array = document.getElementsByName('decimal');  // user input (can be letters, symbols, etc. (strings))
        if (array[array.length-1].value.length != 0) {  // skip the process if user input is literally nothing 
            var binary = [];  // stores binary result
            var decimal = parseInt(array[0].value)  // user decimal input
            var rem;  // temporary variable to store remainder
            if (decimal == "0") {  // if user input is decimal 0, binary output will also be 0
                binary.unshift("0");
            }
            else {
                while (decimal != 0){  // continues until quotient becomes 0  
                    rem = decimal%2;  // %2 calculates the remainder of given decimal
                    binary.unshift(rem);  // stores remainder 
                    decimal = Math.floor(decimal/2)  // rounds down decimal / 2
                }
            } 
            const final = binary.join('');  // converts array to string (for example, array may be 1,0,1,0,0 and a string is 10100)
            document.getElementById('binary').innerHTML = final;   // sends binary to html
        }
        document.getElementById("decimal").focus();
    }
</script>

# Problems I'm Facing

> I was not able to really make or complete all the hacks
I have a good idea of what I'm supposed to do, I just can't really find out how to do it, I wish this was a bit more organized and that I could actually see what corresponds to what. For this I have added comments before each section to find out what each does, but I wasn't really sure about the Java Part
- I can not really make the functions that are necessary to make it work
- I was not sure how to implement the Java
- I was not sure how to open each one and how exactly I was supposed to make the functions
- have to change all the variables for each hack
- Was not sure how to assign the 24 bits part
- Couldn't Assign the java variables to the color code, but I was able to make the functions for it
