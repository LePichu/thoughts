---
title: "Language Tools as Language Mechanisms"
description: "At what point does a tool became an integral mechanism?"
reading_time: "5 minutes"
date: "14-05-2026"
---

I have been thinking a lot about how language mechanisms intrinsically start off
as language tools at some level, for this instance I would like to discuss
**Rust's Borrow Checker** in-tandem with **Clippy**; the Linter for Rust
projects. A Linter, traditionally, is defined as a collection of "lints" or
rules (examples: unused variables, missing method implementations, missing await
in asynchronous blocks, etc.) which check for specific patterns across a given
set of code, it may or may not take program state and type-checking into
account, the end goal of a linter is to catch supposedly bad code ahead of time,
much like something like a type-system trying to catch for type-inconsistencies
or other type-safety failures. Clippy has more than 800 linting rules out of the
box.

The Borrow Checker is an integral part of the Rust language which ensures memory
safety by the system of borrowing, only one variable can truly own something at
a given time and the others must use said something using a reference. It (the
Borrow Checker) exposes mechanisms to allow you to control the flow of memory in
the form of Smart Pointers such as `Box<T>`, `Arc<T>`, `RefCell<T>` and more.

At the very core, the Borrow Checking at compile time happens similarly to how
Clippy would lint the program in question, but the Borrow Checking process is
tied to compilation as is the type-checking, which raises the question, _at what
point do processes that build off a common process diverge into their own
things?_ If someone were to, they could theoretically build the Borrow Checker
for another language; and so has been done before in case of **LLVM**, a Borrow
Checker inspired system was used to find memory-related bugs in LLVM itself a
few years ago by a group of Google Engineers; but would that classify as a
glorified Linter or an extension to the language's core itself and by extension,
a language mechanism? What's to say we cannot turn lints into a mechanism of the
language itself? A popular example of that in recent memory would be **Zig**
throwing compilation errors on finding unused variables in a program.

I do believe that it is a matter of semantics that are variable and subjective
in nature, a language can enforce different rules or lints at the core, and by
extension, a type-checker is also a linter as is the borrow checker, same core
idea of checking for certain rules baked at certain levels.

I should preface how this question came to be; I work on a HDL named **Lapis**
designed and developed by myself, it does factor in HDL-specific variables like
ones pertaining to arithmetic or signal assignment, clocking, resets, and
inferences. The core idea is to have a checker similar to the Borrow Checker in
spirit, but it checks your signals and edges for issues; I have dubbed this
mechanism _**"Edge Critical Checker"**_ or _**ECC**_ partly as a nod to the
other ECC in electronics which is _"Error Correcting Code"_ which also makes
sense to what this mechanism in question does; it does make sure you correct
your code ahead of time by compile-time errors and edge checking similar to how
the Borrow Checker checks for variable ownership and referencing at compile time
to make sure you do not cause memory-related bugs.
