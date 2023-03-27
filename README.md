# react-adsense

React component for Google AdSense.

[![Build Status](https://travis-ci.org/hustcc/react-adsense.svg?branch=master)](https://travis-ci.org/hustcc/react-adsense)
[![npm](https://img.shields.io/npm/v/react-adsense.svg)](https://www.npmjs.com/package/react-adsense)
[![npm](https://img.shields.io/npm/dm/react-adsense.svg)](https://www.npmjs.com/package/react-adsense)
[![npm](https://img.shields.io/npm/l/react-adsense.svg)](https://www.npmjs.com/package/react-adsense)
[![demo](https://img.shields.io/badge/LiveDemo-ClickHere-ff69b4.svg)](http://git.hust.cc/react-adsense/)

## Prepare

First you need to open a Google AdSense account. You should get a script:

```html
<script
  async
  src="https://pagead2syndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7292810486004926"
  crossorigin="anonymous"
></script>
```

Add it to your website's home page. Usually Google verify your website in two weeks. After the process is done, you will be able to create custom ad blocks.

> **Note: Turn Off AdBlocker Before Continue!!!**

After creating an ad block, you should have a code snippet:

```html
<script
  async
  src="https://pagead2syndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7099046271205844"
  crossorigin="anonymous"
></script>
<ins
  class="adsbygoogle"
  style="display:block"
  data-ad-format="fluid"
  data-ad-layout-key="-fb+5w+4e-db+86"
  data-ad-client="ca-pub-7099046271205844"
  data-ad-slot="5725216730"
></ins>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

We need `data-ad-*` attributes to use with react-adsense.

## Install

```bash
npm install --save react-adsense
```

## Usage

### Single Slot

If you only have one ad slot, use `<AdSense/>` component. `client` and `slot` are required.

```jsx
import React from "react";
import { AdSense } from "react-adsense";

<AdSense client="ca-pub-7292810486004926" slot="7806394673" />;
```

You can also customize it:

```jsx
// ads with custom format
<AdSense
  client='ca-pub-7292810486004926'
  slot='7806394673'
  style={{ width: 500, height: 300, float: 'left' }}
  format=''
/>

// responsive and native ads
<AdSense
  client='ca-pub-7292810486004926'
  slot='7806394673'
  style={{ display: 'block' }}
  layout='in-article'
  format='fluid'
/>

// auto full width responsive ads
<AdSense
  client='ca-pub-7292810486004926'
  slot='7806394673'
  style={{ display: 'block' }}
  format='auto'
  responsive='true'
  layoutKey='-gw-1+2a-9x+5c'
/>
```

### Multiple Slots

If you have many ad slots, you can use `<AdSenseProvider/>` to define global parameters.

```jsx
import React from "react";
import { AdSense, AdSenseProvider } from "react-adsense";

<AdSenseProvider client="ca-pub-7292810486004926">
  <AdSense slot="7806394673" />
  <AdSense slot="7234149532" />
  <AdSense slot="7294291011" />
</AdSenseProvider>;
```

## Props

### `client`

Related to `data-ad-client`. Required.

### `slot`

Related to `data-ad-slot`. Required.

### `layout`

Related to `data-ad-layout`. Optional.

### `layout-key`

Related to `data-ad-layout-key`. Optional.

### `format`

Related to `data-ad-format`. Optional.

### `responsive`

Related to `data-ad-responsive`. Optional.

### `className`

Optional.

### `style`

Optional.

# LICENSE

MIT@[hustcc](https://github.com/hustcc).
