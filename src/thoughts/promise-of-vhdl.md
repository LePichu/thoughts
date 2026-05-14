---
title: "The Promise of VHDL"
description: "All my friends hate V*rilog."
reading_time: "5 minutes"
date: "12-12-2025"
---

As a Computer Science Major and a Programmer, I don't think we really appreciate
how good we have it as programmers working on software daily... _**compared to
Electrical Engineers, that is.**_

We really like to complain about tooling, especially in C/C++ land. C be like
_"yeah sure we have terrible tooling, we are aware"_, then you have Verilog who
is like _"...y'all have tooling?"_ We all love to complain about CMake, system
dependencies, and even things like linters — but y'all, the Electronics people
don't even get proper simulation tools. No, I do **not** want to count Verilator
and GTKWave as proper tools; they are so dated, arcane, and unfriendly, it's not
even funny anymore.

Which leads me to my next point: the control I have over my own stack when it
comes to **Lapis**, my own HDL, is something very powerful in nature. When you
own the entire compilation pipeline, you can get away with a lot of things —
like a very strong simulation runner. For me, the idea is that I can transpile
Lapis into a subset of JavaScript, which I can then take into my own runner of
sorts on the web with a proper UI, or even run headless using something like
V8's Rust bindings. The sheer freedom and lack of limits is a very promising
force with that.

If there is something I am really proud of for some reason, it's the fact that
during **9th grade** — the day I had my maths exam — instead of studying maths,
I was studying **LLVM**. Since then, I have been more or less invested into both
language design and systems design, eventually shifting to using **Rust** for
systems programming work over time.

Which brings me to my next point: _**Verilog is a plague**_ in the same sense C
is. I love how Verilog has similar problems to C, and in some sense, it is
<u>the C of the Electrical Engineering sphere</u> — same undefined behavior and
implicit conversions, same tooling issues but _worse_. What's not more alike?

I think part of the reason why I like both **Rust** and **VHDL** is because they
are both based off **Ada** when it comes to the type system and general
strictness. But in some sense, VHDL is also similar to **Elixir** in that there
is a general structure, and VHDL's Hardware Process maps neatly to Elixir's
Actor model — which, to be fair, is a general part of the BEAM ecosystem at this
point. Not only that, VHDL is also more <u>fault-tolerant</u> like Elixir
compared to Verilog, which is... well, _not very good at said thing_, to say the
least.

Looping back to the idea that Verilog is similar to C — and hence, a plague in
my eyes — I refuse to touch it with a 10-foot pole. It _**is**_ the cheese touch
of the electrical world. Thank you for coming to my TED Talk.
