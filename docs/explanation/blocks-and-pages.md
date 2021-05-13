---
sidebar_position: 2
title: Blocks and Pages
---
## Blocks

Blocks are the smallest addressable and thus linkable unit in Loqseq. Each page is automatically created with the first block, which the user can fill with content. If the user closes a block, the program automatically appends another block for further information. Pressing the `Enter` key closes a block. A simple line break within the same block is achieved by pressing the `Shift-Enter` key combination. A block can have any number of sub-blocks. Each block is implicitly linked to its sub-blocks in the knowledge graph.

## Pages

Pages are a special form of blocks. Pages are characterized by the following properties:

- When saved, pages create a separate file in the file system.
- While blocks can contain only sub-blocks, pages can contain multiple blocks at the upper level.
- The user can only mark pages for export, but not individual blocks.
- By default, the knowledge graph represents only the link between pages.
