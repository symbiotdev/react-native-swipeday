<div align="center">
  <h1>React Native SwipeDay 📆🧭</h1>
</div>

> **react-native-swipeday** is a horizontally swipeable React Native component that displays individual days. It enables smooth left and right swiping to navigate between days, making it ideal for daily planners, calendars, habit trackers, and similar apps. Unlike a timeline, each slide focuses on a single full day, giving you complete control over the day's content.
> The component is built with full support for **iOS**, **Android**, **Web**, **Expo**, and **Expo Go**, making it highly versatile and easy to integrate across platforms.

<div align="center">
  <img alt="NPM downloads" src="https://img.shields.io/npm/dw/@symbiot.dev/react-native-swipeday?logo=npm&label=npm&cacheSeconds=3600"/>
  <img alt="NPM version" src="https://img.shields.io/npm/v/@symbiot.dev/react-native-swipeday?logo=npm&label=npm&cacheSeconds=3600"/>
  <img alt="Bundle size" src="https://img.shields.io/bundlephobia/minzip/@symbiot.dev/react-native-swipeday?label=size&cacheSeconds=3600"/>
  <img alt="Typescript" src="https://img.shields.io/static/v1?label=&message=TS&color=blue"/>
</div>

---

## 📱 Demo

<img alt="Demo" src="https://github.com/symbiotdev/react-native-swipeday/blob/main/demo.gif" width="300px" height="600px" />

---

## ✨ Key Features

📅 **Swipeable Day View** – Navigate horizontally through days with optional snapping.  
👥 **Group-Based Layout** – Organize your day view by teams, rooms, users, etc.  
🎨 **Custom Renderers** – Inject your own headers, day content, or group layout via render props.  
📱 **Cross-Platform Support** – Works seamlessly across:

- iOS & Android
- Web via React Native Web
- Expo & Expo Go

🧠 **Minimal & Extensible** – Lightweight core with deep customization hooks.  
🚀 **Performance Friendly** – Virtualized scrolling and render control for optimal responsiveness.

---

## 🧠 Ideal For

- 👥 Employee shift planners
- 🛎️ Booking views by room, therapist, stylist, etc.
- 📆 Grouped daily timelines
- 🧑‍🏫 Class schedules split by instructor or location
- 📦 Delivery or service assignments by region
- 🛠 Field service or technician dispatch views
- 🧭 Any multi-entity day-based scheduling need

---

## 📦 Installation

```bash
npm install @symbiot.dev/react-native-swipeday date-fns react-native-reanimated react-native-gesture-handler
# or
yarn add @symbiot.dev/react-native-swipeday date-fns react-native-reanimated react-native-gesture-handler

# for web support
npm i react-native-web
# or
yarn add react-native-web
```

```tsx
import { SwipeDay } from '@symbiot.dev/react-native-swipeday';

// ... and voilà 💫
<SwipeDay />
```

---

## 🎨 `SwipeDayThemeProps` – [Theming & Appearance](#theme)

You can customize the look and feel of `SwipeDay` using the `theme` prop. It supports both **global styles** and **scheme-based overrides** for `'light'` and `'dark'` modes.

### 🧩 Structure

The `SwipeDayThemeProps` type supports three layers:

1. **Global Styling (applies to all schemes unless overridden)**
2. **Per-scheme Overrides** – Use `light` and `dark` keys to define specific values
3. **Theme Scheme Selector** – Control active theme using `scheme`

```ts
type SwipeDayThemeProps = SwipeDayStyle & {
  scheme?: 'light' | 'dark';
  light?: SwipeDayStyle;
  dark?: SwipeDayStyle;
};
```

### 🧱 Available Styling Props

| Prop Name                    | Description                               | 🍏 iOS | 🤖 Android | 🌐 Web | Default Value                     |
|------------------------------|-------------------------------------------|:------:|:----------:|:------:|-----------------------------------|
| `backgroundColor`            | Main background color of the grid view    |   ✅    |     ✅      |   ✅    | light: `#FFFFFF`, dark: `#000000` |
| `dayHeaderBackgroundColor`   | Background for the day-of-week header bar |   ✅    |     ✅      |   ✅    | light: `#FFFFFF`, dark: `#000000` |
| `dayHeaderTextColor`         | Text color for day-of-week labels         |   ✅    |     ✅      |   ✅    | light: `#000000`, dark: `#FFFFFF` |
| `groupHeaderBackgroundColor` | Background for the group header bar       |   ✅    |     ✅      |   ✅    | light: `#FFFFFF`, dark: `#000000` |
| `groupHeaderTextColor`       | Text color for group labels               |   ✅    |     ✅      |   ✅    | light: `#000000`, dark: `#FFFFFF` |
| `verticalLineColor`          | Color of vertical grid lines              |   ✅    |     ✅      |   ✅    | light: `#F1F1F1`, dark: `#303030` |
| `horizontalLineColor`        | Color of horizontal grid lines            |   ✅    |     ✅      |   ✅    | light: `#F1F1F1`, dark: `#303030` |

```tsx
<SwipeDay
  //...
  theme={{
    backgroundColor: '#f0f0f0', // for light and dark mode
  }}
/>

// ----

<SwipeDay
  //...
  theme={{
    backgroundColor: '#f0f0f0', // only applies to light mode
    dark: {
      backgroundColor: '#020202',
    },
  }}
/>
```

---

## 📐 `SwipeDayDimensionsProps` – [Layout & Dimensions](#dimensions)

Control the physical dimensions of key areas inside the `SwipeDay`. All values are in **pixels** and optional — sensible defaults are provided.

### 🧱 Available Dimension Props

| Prop Name            | Description                               | 🍏 iOS | 🤖 Android | 🌐 Web | Default Value |
|----------------------|-------------------------------------------|:------:|:----------:|:------:|---------------|
| `width`              | SwipeDay width                            |   ✅    |     ✅      |   ✅    | `system`      |
| `dayHeaderHeight`    | Height of the day header (weekday labels) |   ✅    |     ✅      |   ✅    | `50`          |
| `groupHeaderHeight`  | Height of the group header (group labels) |   ✅    |     ✅      |   ✅    | `30`          |
| `horizontalLineSize` | Height of horizontal divider lines        |   ✅    |     ✅      |   ✅    | `0.5`         |

```tsx
<SwipeDay
  //...
  width={300}
/>;
```

--- 

## 📅 `SwipeDayDatetimeProps` – [Date & Time Configuration](#datetime)

Set the visible time range, number of days, start date, and other calendar-related behaviors.  
These props give you precise control over how the `SwipeDay` renders days and time slots.

### 🧱 Available Datetime Props

| Prop Name      | Description                                                 | 🍏 iOS | 🤖 Android | 🌐 Web | Default Value |
|----------------|-------------------------------------------------------------|:------:|:----------:|:------:|---------------|
| `startDate`    | The starting datetime for the initial calendar state        |   ✅    |     ✅      |   ✅    | `new Date()`  |
| `weekStartsOn` | Day the week starts on (0=Sun, 1=Mon, etc.)                 |   ✅    |     ✅      |   ✅    | `0` (Sunday)  |
| `hiddenDays`   | Days of the week to hide (e.g., `[0, 6]` to hide Sun & Sat) |   ✅    |     ✅      |   ✅    | `[]`          |
| `numberOfDays` | Number of days to render in the view                        |   ✅    |     ✅      |   ✅    | `1`           |
| `minDate`      | Earliest date to allow navigation                           |   ✅    |     ✅      |   ✅    | `—`           |
| `maxDate`      | Latest date to allow navigation                             |   ✅    |     ✅      |   ✅    | `—`           |

```tsx
<SwipeDay
  //...
  weekStartsOn={1} // starts on Monday
  numberOfDays={3}
  hiddenDays={[0, 6]} // exclude weekends (Sun,Sut)
/>;
```

---

## 🎮 `SwipeDayControllerProps` – [Interaction & Display Toggles](#controller)

Control user interaction features like swiping, snapping, and visibility of UI components like the headers.

### 🧱 Available Controller Props

| Prop Name              | Description                                                      | 🍏 iOS | 🤖 Android | 🌐 Web | Default Value |
|------------------------|------------------------------------------------------------------|:------:|:----------:|:------:|---------------|
| `swipeable`            | Enable swiping between days or weeks                             |   ✅    |     ✅      |   ✅    | `false`       |
| `snappable`            | Snap scroll/drag to the nearest date(or group in groupable mode) |   ✅    |     ✅      |   ✅    | `false`       |
| `debounceable`         | Delays date change handler to avoid rapid successive triggers.   |   ✅    |     ✅      |   ✅    | `false`       |
| `rtl`                  | Enable right-to-left layout (for RTL languages)                  |   ✅    |     ✅      |   ✅    | `false`       |
| `isDayHeaderVisible`   | Toggle visibility of the top day-of-week header                  |   ✅    |     ✅      |   ✅    | `true`        |
| `isGroupHeaderVisible` | Toggle visibility of the top group header                        |   ✅    |     ✅      |   ✅    | `true`        |

```tsx
<SwipeDay
  //...
  swipeable // swipe actions turned on
  scrollable // user can scroll
  snappable // date/group snapping enabled
/>
```

---

## 🔧 `SwipeDayScrollProps` – [Scroll and Refresh Control](#scroll)

These types control the scroll and refresh behavior for day-based components, allowing flexible configuration either globally, per group, or per specific date.

### 🔍 `SwipeDayScrollProp`

Defines the scroll or refresh state and can be one of the following:

- `boolean` — enable or disable scrolling/refreshing globally.
- `Record<string, boolean>` — keyed by group IDs to enable or disable per group.
- `Array<{ groupId: string; date: string; value: boolean }>` — fine-grained control by group and date.

### 🧱 `SwipeDayScrollProps`

Props that manage scroll and refresh capabilities:

| Prop Name     | Description                                                    | 🍏 iOS | 🤖 Android | 🌐 Web | Default Value |
|---------------|----------------------------------------------------------------|:------:|:----------:|:------:|---------------|
| `scrollable`  | Controls if day scrolling is enabled, with flexible options.   |   ✅    |     ✅      |   ✅    | `false`       |
| `refreshable` | Controls if pull-to-refresh is enabled, with flexible options. |   ✅    |     ✅      |   ➖    | `false`       |
| `refreshing`  | Indicates the refreshing state, useful for UI feedback.        |   ✅    |     ✅      |   ➖    | `false`       |

### 📦 Example Usage

```tsx
<SwipeDay
  //...
  scrollable // enable scroll for all days
/>
```

---

## 📦 `SwipeGayGroupProps` – [Groups](#groups)

Configure how groups are handled in the SwipeGay component.

### 🧱 Available Props

| Prop Name        | Description                                         | 🍏 iOS | 🤖 Android | 🌐 Web | Default Value |
|------------------|-----------------------------------------------------|:------:|:----------:|:------:|---------------|
| `groupable`      | Controls days splitting by groups                   |   ✅    |     ✅      |   ✅    | `false`       |
| `numberOfGroups` | Optional number of groups to display                |   ✅    |     ✅      |   ✅    | `groups size` |
| `groups`         | Optional array of group objects (`SwipeGayGroup[]`) |   ✅    |     ✅      |   ✅    | `[]`          |

### Example Usage

```tsx
const groups = [
  { id: 1, name: 'Group A' },
  { id: 2, name: 'Group B' },
];

<SwipeGayComponent
  //...
  numberOfGroups={2}
  groups={groups}
/>
```

---

## ⏱ `SwipeDayFormatterProps` – [Text Formatting](#formatter)

Customize how dates and times appear within the SwipeDay component using format strings (e.g., `dd`, `HH:mm`, `EEE`).  
These follow [date-fns](https://date-fns.org/docs/format) formatting syntax.

### 🧱 Available Formatter Props

| Prop Name             | Description                                                    | 🍏 iOS | 🤖 Android | 🌐 Web | Default Value |
|-----------------------|----------------------------------------------------------------|:------:|:----------:|:------:|---------------|
| `dayHeaderTextFormat` | Format for the day header labels (e.g., `Mon`, `Apr 20`)       |   ✅    |     ✅      |   ✅    | `EEEEEE dd`   |
| `locale`              | Locale object from `date-fns` for internationalized formatting |   ✅    |     ✅      |   ✅    | `en`          |

```tsx
import { zhCN } from 'date-fns/locale/zh-CN';

<SwipeDay
  //...
  locale={zhCN} // Chinese localization
/>;
```

---

## 🧭 `SwipeDayActionsProps` – [User Interaction Callbacks](#actions)

Callbacks to handle user interactions within a swipeable day grid, such as taps, long presses, header presses, and data refreshes.

### 🧱 Available Action Callbacks

| Prop Name            | Description                                            | 🍏 iOS | 🤖 Android | 🌐 Web |
|----------------------|--------------------------------------------------------|:------:|:----------:|:------:|
| `onLoad`             | Called once the component is initialized and ready     |   ✅    |     ✅      |   ✅    |
| `onChangeDate`       | Triggered when the selected date changes               |   ✅    |     ✅      |   ✅    |
| `onRefresh`          | Called when the grid requests a manual refresh of data |   ✅    |     ✅      |   ➖    |
| `onGroupHeaderPress` | Triggered when a group header is tapped                |   ✅    |     ✅      |   ✅    |
| `onDayHeaderPress`   | Called when the day header is tapped                   |   ✅    |     ✅      |   ✅    |
| `onDayPress`         | Triggered when a day cell is tapped                    |   ✅    |     ✅      |   ✅    |
| `onDayLongPress`     | Triggered on a long press of a day cell                |   ✅    |     ✅      |   ✅    |

```tsx
import { useState } from 'react';

//...
const [selectedDate, setSelectedDate] = useState(new Date());

<SwipeDay
  //...
  onChangeDate={setSelectedDate} // Update selected date on swipe or tap
  onRefresh={({ date }) => console.log('Refreshing data for:', date)}
  onGroupHeaderPress={({ groupId }) => console.log('Group pressed:', groupId)}
  onDayLongPress={({ date }) => console.log('Long pressed:', date)}
/>
```

--- 

## 🎨 `SwipeDayRenderProps` – [Custom Render Props API](#renderprops)

Customize the visual presentation of the calendar by providing your own render functions.  
Perfect for integrating your own UI components or applying tailored styles.

### 🧱 Available Render Props

| Prop                | Description                                                          | Parameters                         | Returns        |
|---------------------|----------------------------------------------------------------------|------------------------------------|----------------|
| `renderGroupHeader` | Custom renderer for the group header (e.g., a user or resource name) | `{ groupId: SwipeGayGroup['id'] }` | `ReactElement` |
| `renderDayHeader`   | Custom renderer for the day header (e.g., a weekday label)           | `{ date: Date }`                   | `ReactElement` |
| `renderDay`         | Custom renderer for each individual day cell                         | `{ date: Date }`                   | `ReactElement` |

___

## 🔧 `SwipeDayRef` – [Imperative Control API](#ref)

Control and interact with the SwipeDay instance programmatically using a React ref.  
Great for custom toolbars, buttons, or dynamic navigation.

### 🧱 Available Ref Methods

| Method          | Description                                                                     | Returns             |
|-----------------|---------------------------------------------------------------------------------|---------------------|
| `getPrevDate()` | Returns the previous valid date range (optionally ignoring `minDate`/`maxDate`) | `Date \| undefined` |
| `getNextDate()` | Returns the next valid date range (optionally ignoring `minDate`/`maxDate`)     | `Date \| undefined` |
| `prevDate()`    | Navigate to the previous available date                                         | `void`              |
| `nextDate()`    | Navigate to the next available date                                             | `void`              |
| `back()`        | Navigate backward through a specified number of days (`numberOfDays`)           | `void`              |
| `forward()`     | Navigate forward through a specified number of days (`numberOfDays`)            | `void`              |

```tsx
import { useRef } from 'react';
import { SwipeDay, SwipeDayRef } from '@symbiot.dev/react-native-swipeday';

const swipeDayRef = useRef<SwipeDayRef>(null);

<SwipeDay
  //...
  ref={swipeDayRef}
/>

//...
<Pressable onPress={() => swipeDayRef.current?.forward()}>{/*...*/}</Pressable>
```

___

### [🌐 **Platform Support**](#support)

- ✅ iOS
- ✅ Android
- ✅ Web
- ✅ Expo & Expo Go

---

### [📦 **Bundle Size**](#size)

Lightweight and fast — see actual size on [Bundlephobia](https://bundlephobia.com/package/@symbiot.dev/react-native-swipeday).

---

### [💬 Contributing](#contributing)

Contributions welcome! Feel free to open issues, discussions, or suggestions.

---

### [🌟 Who's Using This?](#usage)

Using `react-native-swipeday` in your app or product?  
Feel free to share your project — it might be featured in this section!

> ✉️ Open pull request, or reach out directly to get included.

___

### [🚀 Got Ideas or Gaps to Fill?](#ideas)

Know of existing libraries or functionality that could be improved?  
Have an idea for something completely new?

**Symbiot** is ready to take on the challenge — feedback, feature requests, or collaboration ideas are always welcome!

> 🧠 Let’s build better tools together. Start the conversation or contact via [email](mailto:info@symbiot.dev).

___

### [🧾 License](#license)

MIT — Made with ❤️ by [Symbiot](https://symbiot.dev)

