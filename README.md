# unsplash-clone-app
사진 공유사이트 Unsplash("<a href="https://unsplash.com/">https://unsplash.com/</a>")의 Open API를 사용하여 클론한 웹 사이트 입니다.<br/><br/>
시간당 api 요청 횟수의 제한이 있어서 사이트 접속시 원활하지 않을 수 있습니다.
<br /><br />


## 1. 사용한 기술

``` javascript
    "react": "^17.0.1",
    "react-scripts": "^4.0.0",
    "react-dom": "^17.0.1",
    "react-router-dom": "^5.2.0",
    "use-react-router": "^1.0.7",
    "history": "4.10.1",
    "redux": "^4.0.5",
    "react-redux": "^7.2.2",
    "redux-devtools-extension": "^2.13.8",
    "reduxsauce": "^1.2.0",
    "redux-saga": "^1.1.3",
    "axios": "^0.21.0",
    "immer": "^9.0.1",
    "lodash": "^4.17.20",
    "prop-types": "^15.7.2",
    "qs": "^6.9.4",
    "react-loading-skeleton": "^2.2.0",
    "classnames": "^2.2.6",
    "styled-components": "^5.2.1",
    "styled-media-query": "^2.1.2"
```

## 2. 대표기능

- [x] 토픽 추천<br />
- [x] 사진 검색<br />
- [x] 컬렉션 검색<br />
- [x] 사진 상세페이지<br />
- [x] 웹사이트 반응형<br />

## 3. 상세기능

<br/>

### 3.1. 토픽 추천

> <img src="https://i.imgur.com/9U9Sx8o.gif" title="home_lnb_scroll_menu" width="700"><br/>
> [🔗 코드 바로가기](https://github.com/ye-r1/unsplash/blob/f860ac4b3f78c54fe7aa8ffc5acbb25cae3b666a/src/view/components/Lnb/HorizontalSlideMenu.js)

- 추천하는 토픽 주제를 노출합니다.
- 스크롤 메뉴를 구현하여 주제의 갯수 상관없이 볼 수 있습니다.

<br />

> <img src="https://i.imgur.com/Pj2AiPx.gif" title="topic_page" width="700"><br/>
> [🔗 코드 바로가기](https://github.com/ye-r1/unsplash/blob/f860ac4b3f78c54fe7aa8ffc5acbb25cae3b666a/src/view/pages/Topic.js)

- 토픽 페이지는 토픽에 대한 설명 및 api 상태, 큐레이터, 해당 토픽의 갯수를 나타내고 있습니다.
- 사진 컨텐츠는 masonry grid를 구현하여 나타내었습니다.

<br/>

### 3.2. 사진 검색

> <img src="https://i.imgur.com/Ci3Ly8J.gif" title="search_photos" width="700"><br/>
> [🔗 코드 바로가기](https://github.com/ye-r1/unsplash/blob/ba57b66d73892c1c03bfdf8d40c3fb9ca425280e/src/view/pages/Search.js)

- 검색 페이지 역시 masonry grid를 구현하여 사진 컨텐츠를 노출합니다.
- infinite scroll을 구현하여 특정 스크롤에 닿게 되면 다음 페이지에 대한 컨텐츠를 불러옵니다.
- infinite scroll은 현재 시간당 api 요청 수 제한으로 인하여 부득이하게 3페이지까지만 불러올 수 있도록 설정하였습니다.
- 컨텐츠의 데이터에서 사전에 정의되어있는 너비와 높이를 이용하여 로딩중일때 미리 박스를 만들어주었고 컨텐츠의 테마 컬러로 배경을 주어 스크롤 하는 도중 빈 화면이 노출되지 않도록 구현하였습니다.
- 또한 컨텐츠 이미지에 lazy loading을 구현하여 한번에 이미지를 불러오지 않고 해당 영역이 노출되기 직전 이미지를 불러오도록 하였습니다.

<br/>

> <img src="https://i.imgur.com/Mg2ZG1S.gif" title="search_photos_related_keyword" width="700"><br/>
> [🔗 코드 바로가기](https://github.com/ye-r1/unsplash/blob/ba57b66d73892c1c03bfdf8d40c3fb9ca425280e/src/view/components/Search/SearchScrollMenu.js)

- 검색시 연관된 키워드를 노출하였습니다.
- 스크롤 메뉴를 공통으로 사용하여 재사용성을 높였습니다.

<br/>

> <img src="https://i.imgur.com/tgyhX1G.gif" title="search_photos_filter" width="700"><br/>
> [🔗 코드 바로가기](https://github.com/ye-r1/unsplash/blob/ba57b66d73892c1c03bfdf8d40c3fb9ca425280e/src/view/components/Search/SearchControl/index.js)

- 사용자가 원하는 조건에 따라 검색 결과를 보여줄 수 있도록 control 메뉴를 구현하였습니다.
- 검색어가 변해도 기존 조건을 그대로 사용할 수 있도록 하였습니다.

<br/>

> <img src="https://i.imgur.com/HxPv2vE.gif" title="search_photos_skeleton" width="700"><br/>
> [🔗 코드 바로가기](https://github.com/ye-r1/unsplash/blob/ba57b66d73892c1c03bfdf8d40c3fb9ca425280e/src/view/components/Photos/MasonryPhotos/PhotoList.js)

- 데이터가 로딩중일때 빈화면이 보이지 않도록 skeleton grid를 구현하였습니다.

<br/>

> <img src="https://i.imgur.com/uoTblr2.gif" title="search_photos_empty" width="700"><br/>
> [🔗 코드 바로가기](https://github.com/ye-r1/unsplash/blob/ba57b66d73892c1c03bfdf8d40c3fb9ca425280e/src/view/components/Search/SearchPhotos.js#L12)

- 검색결과가 없는 경우에는 empty component를 구현하여 보여주었습니다.

<br/>

### 3.3. 컬렉션 검색

> <img src="https://i.imgur.com/uuLnX2X.gif" title="collection_page" width="700"><br/>
> [🔗 코드 바로가기](https://github.com/ye-r1/unsplash/blob/ba57b66d73892c1c03bfdf8d40c3fb9ca425280e/src/view/components/Photos/CollectionPhotos/index.js)

- 컬렉션 페이지는 해당 키워드의 컬렉션을 노출합니다.
- 마찬가지로 infinite scroll을 재사용하여 다음 컨텐츠를 불러옵니다.
- 컬렉션에 등록된 컨텐츠가 1개만 있는 경우 비어있는 이미지를 회색 배경으로 보이도록 하였습니다.
- 또한 태그는 3개만 보여지도록 구성 하였습니다.

<br/>

> <img src="https://i.imgur.com/TitylN5.gif" title="search_collection_skeleton" width="700"><br/>
> [🔗 코드 바로가기](https://github.com/ye-r1/unsplash/blob/ba57b66d73892c1c03bfdf8d40c3fb9ca425280e/src/view/components/Loader/CollectionPhotosSkeleton/index.js)

- 컬렉션 페이지도 마찬가지로 로딩중일때 skeleton grid 사용하여 노출해주었습니다.

<br/>

### 3.4. 사진 상세페이지

> <img src="https://i.imgur.com/xrmnt7H.gif" title="popup_datail" width="700"><br/>
> [🔗 코드 바로가기](https://github.com/ye-r1/unsplash/blob/ba57b66d73892c1c03bfdf8d40c3fb9ca425280e/src/view/containers/PopupPhotoContainer.js)

- pc 사이즈 너비의 화면에서는 이미지를 클릭했을때 상세페이지가 레이어 팝업 형태로 나타나도록 하였습니다.
- 반대로 모바일 너비에서의 화면에는 이미지 클릭시 바로 일반 상세페이지로 이동하게 됩니다.
- 팝업이 열릴때 pushState를 사용하여 실제로 이동하지 않고 주소만 상세페이지 주소로 변경되도록 하였습니다.
- 이로 인해 팝업이 열려있는 상태에서 새로고침을 하게 되면 일반 상세페이지로 이동합니다.
- 다만 현재 서버 사이드 렌더링 및 해시 라우터를 사용하고 있지 않아 로컬에서만 작동하고 있습니다.
- 레이어팝업 바깥쪽을 클릭하게 되면 다시 pushState를 사용해 이전 주소로 변경됩니다. 

<br/>

> <img src="https://i.imgur.com/47rVRSy.gif" title="popup_datail_image_zoom" width="700"><br/>
> [🔗 코드 바로가기](https://github.com/ye-r1/unsplash/blob/ba57b66d73892c1c03bfdf8d40c3fb9ca425280e/src/view/components/DetailPhoto/DetailInfo.js#L31)

- 사진을 누르면 이미지 주소를 바꿔 큰 사이즈의 이미지로 변경되도록 하였습니다.
- 큰 이미지에서 다시 사진을 누르면 작은 이미지로 돌아오게 됩니다.

<br/>

> <img src="https://i.imgur.com/kja26yy.gif" title="popup_detail_change_photo" width="700"><br/>
> [🔗 코드 바로가기](https://github.com/ye-r1/unsplash/blob/ba57b66d73892c1c03bfdf8d40c3fb9ca425280e/src/view/components/DetailPhoto/RelatedPhotos.js)

- 연관된 사진 목록에서 이미지를 클릭하게 되면 닫히지 않고 해당 팝업에서 데이터가 변경됩니다.

<br/>

> <img src="https://i.imgur.com/qJWTTAQ.gif" title="detail_page" width="700"><br/>
> [🔗 코드 바로가기](https://github.com/ye-r1/unsplash/blob/ba57b66d73892c1c03bfdf8d40c3fb9ca425280e/src/view/pages/Photos.js)

- 사진을 올린 사람의 정보를 간단하게 보여주고 연관된 사진 및 컬렉션들을 보여주도록 구현하였습니다.
- 팝업 상세페이지와 같은 컴포넌트를 사용하여 재사용성을 높였습니다.

<br/>

### 3.5. 웹사이트 반응형

> <img src="https://i.imgur.com/LiVlhWh.gif" title="response_topic_page" width="700"><br/>
> 토픽 추천

<br/>

> <img src="https://i.imgur.com/lSz2IuG.gif" title="response_search_page" width="700"><br/>
> 사진 검색 <br/>
> [🔗 코드 바로가기](https://github.com/ye-r1/unsplash/blob/ba57b66d73892c1c03bfdf8d40c3fb9ca425280e/src/view/components/Popup/PopupSearchControl.js)
 
- 모바일 너비에 화면에서는 controlMenu가 팝업으로 변경되고 버튼을 누르면 레이어 팝업이 나와서 옵션을 변경할 수 있도록 구현하였습니다.

<br/>

> <img src="https://i.imgur.com/JTJJqlt.gif" title="response_collection_page" width="700"><br/>
> 컬렉션 검색

<br/>

> <img src="https://i.imgur.com/jYhLyfY.gif" title="response_detail_page" width="700"><br/>
> 사진 상세 페이지

<br/>
