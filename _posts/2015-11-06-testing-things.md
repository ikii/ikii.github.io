---
layout: post
title:  "Just testing some things."
date:   2015-11-06 20:59:49 +1100
categories: jekyll test
---

**MathJax/TeX stuff**

<script type="text/javascript"
  src="//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>


MathJax is located here  
`src="//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">`

The best and simpler way to derive the distribution of the sum of two independent Uniform random variates is geometrical requiring working out some area calculations in 2-D.

However, the derivation of the distribution of $$\sum_{i=1}^{n}X_i$$ for $$n>2$$ with each $$X_i$$ independently distributed as $$U(0,1)$$ is generally tedious. Geometrically it is difficult to visualise for higher values of $$n$$. However, a convolution approach would be used to find them (that I will use here kind of recursively).

I start assuming you know the distribution of $$A=X_1+X_2$$ given by the below pdf: $$f_A(a) = \begin{cases} a & \text{if $0 \le a \le 1$}\\ 2-a & \text{if $1 \le a \le 2$}\\ 0 & \text{elsewhere}\end{cases}$$

For $$n=3$$, define $$B=X_1+X_2+X_3=A+X_3$$. Note $$0\le B\le3$$. Now, by convolution of pdfs, the pdf of B: $$f_B(b)=\int_{-\infty}^\infty f_{X_3}(x_3)f_A(b-x_3)\,dx_3$$

Note-1: $$f_A(b-x_3)=b-x_3$$ for $$0\le b-x_3\le1$$, i.e., $$b-1\le x_3\le b$$; Also, $$0 \le x_3 \le 1$$. Combining these two gives $$\mathbb{max}(b-1,0) \le x_3\le \mathbb{min}(b,1)$$

Note-2: $$f_A(b-x_3)=2-b+x_3$$ for $$1\le b-x_3\le2$$, i.e., $$b-2\le x_3\le b-1$$; Also, $$0 \le x_3 \le 1$$. Combining these two gives $$\mathbb{max}(b-2,0) \le x_3\le \mathbb{min}(b-1,1)$$

Looking at the bounds of $$x_3$$, it is reasonable to break the range of $$b$$ (i.e.,[$$0,3$$]) into $$0\le b\le1$$, $$1\le b\le2$$ and $$2\le b\le3$$ and considering the form of the pdf of B within each range separately.

Case: $$0\le b\le1$$: Range in Note-1 reduces to $$0\le x_3\le b$$; while that in Note-2 doesn't reduce to a feasible bound for $$x_3$$. Thus the pdf of $$B$$ reduces to

$$f_B(b)=\int_0^b (b-x_3)\,dx_3=\frac{b^2}{2}$$

Case: $$1\le b\le2$$: Range in Note-1 reduces to $$b-1\le x_3\le 1$$; while that in Note-2 reduces to $$0\le x_3\le b-1$$. Thus the pdf of $$B$$ reduces to

$$f_B(b)=\int_{b-1}^1 (b-x_3)\,dx_3+\int_0^{b-1}(2-b+x_3)\,dx_3=\frac{-2b^2+6b-3}{2}$$

Case: $$2\le b\le3$$: Range in Note-1 doesn't reduce to a feasible bound for $$x_3$$; while that in Note-2 reduces to $$b-2\le x_3\le 1$$. Thus the pdf of $$B$$ reduces to

$$f_B(b)=\int_{b-2}^1(2-b+x_3)\,dx_3=\frac{(3-b)^2}{2}$$

Can you now try similar logic for $$n=4$$ and $$n=5$$?

Although it may not be readily intuitive that the general form of the pdf of the sum of Uniform variates would tend to follow approximately Normal for large n, the pdf is a piecewise polynomial function of degree n-1. And, if you plot this function you'll end up with a plot of close to a pdf of Normal distribution (I tried in R) and it indeed goes to show how powerful the CLT is!

