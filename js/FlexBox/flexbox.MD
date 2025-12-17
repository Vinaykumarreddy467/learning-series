# Flexbox Properties Documentation

## Overview
Flexbox is a one-dimensional layout method for arranging items in rows or columns. It provides powerful alignment and distribution capabilities.

---

## Container Properties

Container properties are applied to the parent element with `display: flex`.

### 1. `display`
Enables flexbox formatting context.

```css
display: flex;        /* block-level flex container */
display: inline-flex; /* inline-level flex container */
```

---

### 2. `flex-direction`
Defines the main axis direction.

```css
flex-direction: row;            /* left to right (default) */
flex-direction: row-reverse;    /* right to left */
flex-direction: column;         /* top to bottom */
flex-direction: column-reverse; /* bottom to top */
```

---

### 3. `flex-wrap`
Controls whether items wrap to multiple lines.

```css
flex-wrap: nowrap;       /* single line (default) */
flex-wrap: wrap;         /* wrap to next line */
flex-wrap: wrap-reverse; /* wrap in reverse direction */
```

---

### 4. `flex-flow` (Shorthand)
Combines `flex-direction` and `flex-wrap`.

```css
flex-flow: row wrap;
flex-flow: column nowrap;
/* Equivalent to:
   flex-direction: column;
   flex-wrap: nowrap;
*/
```

---

### 5. `justify-content`
Aligns items along the **main axis** (horizontal in row, vertical in column).

```css
justify-content: flex-start;    /* items packed at start (default) */
justify-content: flex-end;      /* items packed at end */
justify-content: center;        /* items centered */
justify-content: space-between; /* even space between items */
justify-content: space-around;  /* space around each item */
justify-content: space-evenly;  /* equal space between all items */
justify-content: start;         /* writing-mode dependent */
justify-content: end;           /* writing-mode dependent */
```

---

### 6. `align-items`
Aligns items along the **cross axis** (vertical in row, horizontal in column). Applies to all items.

```css
align-items: stretch;        /* items stretch to fill cross axis (default) */
align-items: flex-start;     /* items aligned at start of cross axis */
align-items: flex-end;       /* items aligned at end of cross axis */
align-items: center;         /* items centered on cross axis */
align-items: baseline;       /* items aligned by text baseline */
align-items: first baseline; /* align to first baseline */
align-items: last baseline;  /* align to last baseline */
```

---

### 7. `align-content`
Distributes space on the **cross axis** when items wrap to multiple lines.

```css
align-content: flex-start;    /* lines packed at start (default) */
align-content: flex-end;      /* lines packed at end */
align-content: center;        /* lines centered */
align-content: space-between; /* even space between lines */
align-content: space-around;  /* space around each line */
align-content: space-evenly;  /* equal space between all lines */
align-content: stretch;       /* lines stretch to fill container */
```

**Note:** Only applies when `flex-wrap: wrap` and multiple lines exist.

---

### 8. `gap` / `row-gap` / `column-gap`
Sets spacing between flex items.

```css
gap: 10px;           /* 10px gap for both row and column */
gap: 10px 20px;      /* 10px row-gap, 20px column-gap */
row-gap: 10px;       /* gap between rows */
column-gap: 20px;    /* gap between columns */
```

---

## Item Properties

Item properties are applied to child elements inside the flex container.

### 1. `order`
Changes the visual order of items (does not affect DOM order).

```css
order: 0;   /* default */
order: 1;   /* appears later */
order: -1;  /* appears earlier */
order: 5;   /* custom order */
```

---

### 2. `flex-grow`
Defines how much an item grows relative to other items when there's extra space.

```css
flex-grow: 0;   /* default - no growth */
flex-grow: 1;   /* grows to fill available space */
flex-grow: 2;   /* grows twice as much as flex-grow: 1 */
```

---

### 3. `flex-shrink`
Defines how much an item shrinks relative to other items when space is limited.

```css
flex-shrink: 1;   /* default - shrinks proportionally */
flex-shrink: 0;   /* does not shrink */
flex-shrink: 2;   /* shrinks twice as much */
```

---

### 4. `flex-basis`
Sets the default main size of an item before growing or shrinking.

```css
flex-basis: auto;   /* default - use item's width/height */
flex-basis: 200px;  /* fixed size */
flex-basis: 50%;    /* percentage of container */
flex-basis: 0;      /* ignore item's size, grow/shrink equally */
```

---

### 5. `flex` (Shorthand)
Combines `flex-grow`, `flex-shrink`, and `flex-basis`.

```css
flex: 0 0 auto;      /* default - no grow, shrink, auto basis */
flex: 1;             /* flex: 1 1 0 - grows to fill space */
flex: 0 1 200px;     /* doesn't grow, can shrink, 200px basis */
flex: 2 1 100px;     /* grows 2x, shrinks 1x, 100px basis */
flex: none;          /* equivalent to flex: 0 0 auto */
```

**Common patterns:**
- `flex: 1` — Makes item flexible and fills available space
- `flex: 0 0 200px` — Fixed size, no grow/shrink
- `flex: 1 1 0` — Equal distribution among flex items

---

### 6. `align-self`
Overrides `align-items` for a single item.

```css
align-self: auto;        /* use container's align-items (default) */
align-self: flex-start;  /* align at start of cross axis */
align-self: flex-end;    /* align at end of cross axis */
align-self: center;      /* center on cross axis */
align-self: baseline;    /* align by baseline */
align-self: stretch;     /* stretch to fill cross axis */
```

---

## Quick Reference Table

| Property | Type | Values |
|----------|------|--------|
| `display` | Container | `flex`, `inline-flex` |
| `flex-direction` | Container | `row`, `row-reverse`, `column`, `column-reverse` |
| `flex-wrap` | Container | `nowrap`, `wrap`, `wrap-reverse` |
| `flex-flow` | Container | `<direction> <wrap>` |
| `justify-content` | Container | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` |
| `align-items` | Container | `stretch`, `flex-start`, `flex-end`, `center`, `baseline` |
| `align-content` | Container | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly`, `stretch` |
| `gap` | Container | `<length>` or `<length> <length>` |
| `order` | Item | Integer (default: `0`) |
| `flex-grow` | Item | Number (default: `0`) |
| `flex-shrink` | Item | Number (default: `1`) |
| `flex-basis` | Item | `auto`, `<length>`, `<percentage>` |
| `flex` | Item | `<grow> <shrink> <basis>` |
| `align-self` | Item | `auto`, `flex-start`, `flex-end`, `center`, `stretch`, `baseline` |

---

## Example

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px 20px;
}

.item {
  flex: 1 1 200px;  /* grows, shrinks, 200px base */
  order: 0;
  align-self: center;
}

.item.fixed {
  flex: 0 0 300px;  /* fixed 300px width */
}

.item.highlight {
  order: -1;  /* appears first */
}
```