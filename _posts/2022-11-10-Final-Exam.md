---
toc: true
comments: true
layout: post
title: Reflection on the Final Exam
author: Edwin Abraham
description: On November 4th, our Final Exam for Trimester 1 was opened and it was a Multiple Choice Test on CollegeBoard with 50 Questions and this is my reflection as well as any test corrections
image: /images/finalexamtri1.png
categories: [Notes, week12, tri1]
---

# Taking the Multiple Choice Test
I wanted to take the test over the weekend, but I did not get the time too. When I got to class on Monday, two of my groupmates had already finished it, so I decided to work with Jishnu. The questions were not too hard, but we spent a lot of time collaborating and explaining our answers to make sure the other one got it. We did this until Question 20, and I finished the rest by myself. I did this pretty quickly and finished quicker than expected and when I submitted I got a **43/50**.

# Test Corrections
After I submitted the test, I got a 43/50 (86%), which was around what I thought I would get. I was hoping to get an A, but I guess this means I should work harder towards trying to understand why I got these questions wrong and remember them. Whenever I got questions wrong, they were usually from the same skill showing that I could use some practice in specific skills.
![]({{ site.baseurl }}/images/finalexamtri1score.png)

1.D: 1/2 (50.0%)

2.B: 5/7 (71.4%)

3.A: 7/8 (87.5%)

3.C: 3/4 (75.0%)

4.A: 4/6 (66.7%)

I can take a look at the notes I took for each section, especially from the ones I got wrong. If I don't understand it from my notes, I can always go back to the CollegeBoard Videos and rewatch it. Additionally, when I was doing test corrections I could look at the reason why my answer was wrong, and why the correct answer was right.

## Question 6
**Topic 1.3**: Program Design and Development

**Explanation** for Wrong Answer: Option D
Incorrect. The loop terminates when count exceeds max, so only values less than or equal to max are printed.

**Explanation** for Correct Answer: Option B
Correct. The procedure initializes count to 1. Inside the loop, the value of count is displayed, then count is incremented by 2 to the next odd integer. The loop terminates when count exceeds max, so all positive odd integers less than or equal to max are printed.

![]({{ site.baseurl }}/images/finalquestion6.png)

Reflection: This question was hard and I was not really sure how to interpret the code. I was not exactly sure of the value of the variable max and I did not really know how to solve it. I remember asking Jishnu about this problem, and I had no idea how to do it.

## Question 11
**Topic 1.2**: Program Function and Purpose

**Explanation** for Wrong Answer: Option D
Incorrect. The inner loop iterates from index j + 1 to the end of the list, so each element is compared with all the elements that follow it, not just the one element that immediately precedes it.

**Explanation** for Correct Answer: Option B
Correct. The algorithm traverses myList using two nested loops. The outer loop iterates from the first element in the list to the second-to-last element in the list. For each iteration of the outer loop, the inner loop compares that element to every subsequent element in the array.

![]({{ site.baseurl }}/images/finalquestion11.png)

Reflection: This question was also very confusing as I did not know how to do it. I was not sure how to read the code, and I am not sure what it means by subsequent and preceding. I got the wrong answer, but it seemed close to the right answer so that was good.

## Question 20
**Topic 2.1**: Binary Numbers

**Explanation** for Wrong Answer: Option B
Incorrect. Four bits can represent 24, or 16 pieces of information, so it is not necessary to add extra bits.

**Explanation** for Correct Answer: Option D
Correct. Four bits can represent 24, or 16 pieces of information.

![]({{ site.baseurl }}/images/finalquestion20.png)

Reflection: We did not really talk about Binary Numbers in class, so I had help from Jishnu because he knew a little bit about it. For this questions, I did not know what a bit was and how it was needed to store directions.

## Question 21
**Topic 2.1**: Binary Numbers

**Explanation** for Wrong Answer: Option A
Incorrect. Statement II is true because colors can be encoded as sequences of bits. Statement III is true because sequences of bits can be used to represent sound.

**Explanation** for Correct Answer: Option D
Correct. All digital data is represented at the lowest level as sequences of bits. Statement I is true because strings of characters can be represented by sequences of bits. Statement II is true because colors can be encoded as sequences of bits. Statement III is true because sequences of bits can be used to represent sound.

![]({{ site.baseurl }}/images/finalquestion21.png)

Reflection: Just like the last question, we did not do Binary Numbers in class so I wasn't sure about it. I did not know you can use binary to represent strings, colors, and audio, but I think that makes sense now.

## Question 36
**Topic 3.10**: Lists

**Explanation** for Wrong Answer: Option D
Incorrect. This would be the correct solution if i were initialized to 0 instead of 1. This code segment will generate the list [4, 6, 8, 10, 12, 14, 16, 18, 20, 22].

**Explanation** for Correct Answer: Option C
Correct. For the first iteration of the loop, twice the value of i, or 2, is appended to evenList, and then i is incremented to 2. For the second iteration of the loop, twice the value of i, or 4, is appended to the list, and then i is incremented to 3. This continues eight more times, appending the next eight even numbers to evenList. This code segment will generate the list [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].

![]({{ site.baseurl }}/images/finalquestion36.png)

Reflection: I was not sure how the order matters in this question, and I am still a little confused by it, but it makes a little more sense to me now because you should define the variable before running the code with the variable.

## Question 37
**Topic 3.3**: Mathematical Expressions

**Explanation** for Wrong Answer: Option A
Incorrect. A temporary variable is needed to interchange the values of two variables.

**Explanation** for Correct Answer: Option D
Correct. The first statement assigns the value of num1 to the temporary variable temp. The second statement assigns the value of num2 to num1. The third statement assigns the original value of num1, which is stored in temp, to num2. The original values of num1 to num2 are interchanged.

![]({{ site.baseurl }}/images/finalquestion37.png)

Reflection: The question wanted to interchange the variables so I thought that switching them would be enough, but I didn't realize that num1 is changed to num2, so when the second line of code is ran, num2 stays the same.

## Question 39
**Topic 3.2**: Data Abstraction

**Explanation** for Wrong Answer: Option C
Incorrect. List indices are typically nonnegative integers, so a decimal number between two integers would be considered an invalid index.

**Explanation** for Correct Answer: Option D
Correct. List indices are typically nonnegative integers. The exam reference sheet describes a list structure whose index values are 1 through the number of elements in the list, inclusive. So, 4 would be considered a valid index.

![]({{ site.baseurl }}/images/finalquestion39.png)

Reflection: I was not sure how to answer this question at all, we did not do the videos for this CollegeBoard Big Idea, but we still went over it in class, and I was not sure what a valid index was, so I guessed on this question.

# Confusing Problems
These are some problems that I was not sure how to do and I needed help to understand it. I did not really understand what the question was asking or how to answer it. I just chose what I thought was the best answer, and it was correct.

## Question 2
![]({{ site.baseurl }}/images/finalquestion2.png)
This question was really hard and I did not really know what to do. I do not know how I got this answer correct because I had no idea what it meant by procedure or mystery. I just followed the code on the inside and chose my answer, and it turned out to be right.

## Question 9
![]({{ site.baseurl }}/images/finalquestion9.png)
I still do not really understand this question, but I did understand that you need to change the lines for the code to work properly. When answering this question, I did not know what to do and Jishnu said to pick number 3 and explained it to me.

## Question 44
![]({{ site.baseurl }}/images/finalquestion44.png)
This question was a little hard mainly because I did not know what MOD was, so I had to look it up to find out it was the remainder which was not that hard.

