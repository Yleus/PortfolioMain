import React from 'react';

import { Container, Components, Space } from './styles';
import Copyright from '../../../components/Copyright';
import SkillComp from '../../../components/Skill';

const Skills: React.FC = () => {
  const listHtml=["Title worthy of tags","Accessibility","Descriptive attributes", "Title attribute with links", "Proper document structure"];
  const listHtmls = listHtml.map((c, i)=> <li key={i}>{c}</li>)

  const listCss=["Reuse of classes","Flexible units","Good names for classes", "No rule override"];
  const listCsss = listCss.map((c, i)=> <li key={i}>{c}</li>)

  const listJs=["Object orientation", "Asynchronous" , "API", ];
  const listJss = listJs.map((c, i)=> <li key={i}>{c}</li>)

  const listNode=["Npm","Yarn"];
  const listNodes = listNode.map((c, i)=> <li key={i}>{c}</li>)

  const listReact=["styled-components","react-icons","react-router-dom", "react-sticky-box", "react-switch", "polished", "vite"];
  const listReacts = listReact.map((c, i)=> <li key={i}>{c}</li>)

  const listTs=["Interface","Enums","Typing"];
  const listTss = listTs.map((c, i)=> <li key={i}>{c}</li>)

  return (
    <Container>
        <h1>Skills</h1>
        <Components>
          <SkillComp listing={listHtmls} icon={
            <svg viewBox="0 0 128 128" width="60">
            <path  d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499L108.431 27H19.569zM91.61 47.471l-.507 5.834L90.88 56H48.311l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69L64 106.964v-.005l-.027.012-22.777-5.916L39.65 84h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649L77.708 79H39.153l-2.734-30.836L36.152 45h55.724l-.266 2.471zM27.956 1.627h5.622v5.556h5.144V1.627h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.513V1.627z"></path>
            </svg>}
            />
          <SkillComp listing={listCsss} icon={
            <svg viewBox="0 0 128 128">
            <path d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063L108.33 26H19.67zm69.21 50.488L86.53 98.38l.009 1.875L64 106.55v.001l-.018.015-22.719-6.225L39.726 83h11.141l.79 8.766 12.347 3.295-.004.015v-.032l12.394-3.495L77.702 77H51.795l-.222-2.355-.506-5.647L50.802 66h27.886l1.014-11H37.229l-.223-2.589-.506-6.03L36.235 43h55.597l-.267 3.334-2.685 30.154M89 14.374L81.851 6H89V1H73v4.363L81.39 13H73v5h16zm-19 0L63.193 6H70V1H55v4.363L62.733 13H55v5h15zM52 13h-8V6h8V1H38v17h14z"></path>
            </svg>}
            />
          <SkillComp listing={listJss} icon={
            <svg viewBox="0 0 128 128">
            <path d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
            </svg>}
          />
          <SkillComp listing={listNodes} icon={
            <svg viewBox="0 0 128 128">
            <path d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
            </svg>}
          />
          <SkillComp listing={listReacts} icon={
            <svg viewBox="0 0 128 128">
            <g ><circle cx="64" cy="47.5" r="9.3"></circle><path d="M64 81.7C71.3 88.8 78.5 93 84.3 93c1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3C56.7 6.3 49.5 2.1 43.7 2.1c-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zM46 57.9c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zM69.6 26.8c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zM40.9 7.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7C24.5 56.9 17.8 52 17.8 47.5c0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5zm-4.2 41.2c2.2-2.7 2.3-5.7 1.1-8.7-1.2-3-3.7-4.4-6.8-4.5-3.7-.1-7.5 0-11.2 0H16V125h3v-9.8h4.7c.6 0 1.1.2 1.4.7l6 9.3c.1.2.4.5.6.5h3.9c-2.4-3.7-4.7-7.2-7.1-10.8 2.1-.3 3.9-1 5.1-2.6zm-14.6-.2v-9.9h1.1c2.3 0 4.7-.1 7 .1 2.7.1 4.6 2.2 4.6 4.9s-2.2 4.8-4.9 4.9c-2.4.1-4.8 0-7.8 0zm38.7 1.3c-1.6-7-8-8.8-12.9-6.6-3.8 1.7-5.5 5-5.6 9.1-.1 3.1.8 5.9 3.2 8 2.7 2.4 6 2.7 9.4 2.1 1.9-.4 3.6-1.3 4.9-2.7-.5-.7-1-1.4-1.5-2-2.8 2.4-5.9 3.2-9.3 1.6-2.2-1.1-3.3-3.8-3.5-5.8h15.5v-1.3c.1-.9 0-1.7-.2-2.4zM42.6 115c-.3-3 2.7-6.2 6-6.2 3.8-.1 6.2 2.2 6.3 6.2H42.6zm30.7-8.7c-1.5-.3-3.1-.4-4.6-.3-2.4.2-4.5 1.3-6.2 3.1.5.7.9 1.4 1.5 2.2.2-.2.4-.4.6-.5 1.6-1.5 3.5-2.3 5.8-2.1 1.8.1 3.5.7 4 2.5.4 1.4.3 2.9.4 4.4-.3 0-.4-.1-.5-.2-2.4-2-5.1-2.4-8-1.7-2.7.7-4.4 2.8-4.6 5.5-.2 3.1 1.2 5.4 3.9 6.5 1.7.7 3.6.7 5.4.3 1.4-.3 2-1.1 4-2.2v1.3h2.8c0-4 .1-8.9 0-13.5 0-2.9-1.7-4.7-4.5-5.3zm1.4 12.6c-.1.3 0 .6 0 .9 0 2.1-.5 2.8-2.5 3.6-1.4.5-2.9.7-4.4.2-1.7-.5-2.9-2-2.9-3.7-.1-1.7 1-3.4 2.7-3.9 2.3-.8 4.4-.3 6.3 1.1.6.5 1 1 .8 1.8zm15.6-9.9c2.6-.8 5-.3 6.8 1.9l.3.2c.7-.6 1.3-1.2 2.1-1.9-.3-.3-.4-.5-.6-.8-2.9-3.1-8.6-3.5-12.1-1-4.9 3.6-4.8 10.6-2.4 14.3 2.3 3.5 5.6 4.7 9.5 4.2 2.3-.3 4.2-1.4 5.7-3.3-.7-.6-1.4-1.2-2.1-1.9-.2.2-.3.3-.4.5-2.7 3-7.2 2.7-9.6-.5-1.4-1.9-1.7-4.1-1.3-6.3.2-2.5 1.5-4.5 4.1-5.4zm20.8 13.6c-.2.1-.3.2-.3.2-.8.6-1.6.7-2.5.4-.9-.4-1-1.2-1.1-2v-11.4c0-.2 0 .2.1-.8h3.8v-3h-4v-5h-3v5.4h-2.6c-.2 0-.5.2-.5.4-.1.7 0 1.2 0 2.2h3.2v12.8c0 1.6.4 3 1.8 3.8 1.5.9 4.4.7 5.7-.4.2-.1.3-.5.3-.6-.3-.6-.6-1.3-.9-2z"></path></g>
            </svg>}
          />
          <SkillComp listing={listTss} icon={
            <svg viewBox="0 0 128 128">
            <path d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path>
            </svg>}
          />
        </Components>

        <h2>Coming soon...</h2>

        <Components>
          <SkillComp listing={[]} icon={
            <svg viewBox="0 0 128 128">
            <path d="M53.595 67.817c-13.224 3.694 8.044 11.325 24.88 4.112-2.757-1.071-4.735-2.309-4.735-2.309-7.508 1.419-10.99 1.531-17.805.753-5.625-.644-2.34-2.556-2.34-2.556zm22.864-7.207c-9.95 1.915-15.698 1.854-22.979 1.103-5.629-.582-1.944-3.311-1.944-3.311-14.563 4.834 8.106 10.318 28.459 4.365-2.162-.761-3.536-2.157-3.536-2.157zm7.799-41.731s-29.439 7.351-15.38 23.552c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.518-6.349-7.982-9.502 10.772-20.378zM37.48 81.305c34.324 5.563 62.567-2.506 53.666-6.523 0 0 2.431 2.005-2.679 3.555-9.715 2.943-40.444 3.831-48.979.117-3.066-1.335 2.687-3.187 4.496-3.576 1.887-.409 2.965-.334 2.965-.334-3.412-2.404-22.055 4.718-9.469 6.761zm41.868-27.42c1.65-1.126 3.93-2.104 3.93-2.104s-6.492 1.161-12.961 1.704c-7.918.664-16.412.795-20.676.225-10.095-1.35 5.534-5.063 5.534-5.063s-6.07-.411-13.533 3.199c-8.827 4.269 21.832 6.214 37.706 2.039zm3.865 10.432c-.074.2-.322.425-.322.425 21.546-5.664 13.624-19.965 3.322-16.345-.903.319-1.378 1.063-1.378 1.063s.571-.23 1.845-.496c5.207-1.084 12.669 6.972-3.467 15.353zM65.006 48.492c-3.179-7.186-13.957-13.471.005-24.498 17.41-13.742 8.476-22.682 8.476-22.682 3.604 14.197-12.711 18.486-18.6 27.328-4.01 6.024 1.969 12.499 10.119 19.852zm18.79 35.651c-13.219 2.488-29.524 2.199-39.191.603 0 0 1.98 1.64 12.157 2.294 15.484.99 39.269-.551 39.832-7.878 0-.001-1.082 2.776-12.798 4.981zM51.131 99.535c-2.887 0-5.351.714-7.408 1.622l.624 2.493c1.619-.595 3.618-1.147 5.674-1.147 2.85 0 3.979 1.147 3.979 3.521V108h-1.2c-6.921 0-10.044 2.585-10.044 6.624 0 3.479 2.059 5.407 5.933 5.407 2.49 0 4.351-.845 6.088-2.35l.316 2.319H58v-14.492c0-3.599-1.924-5.973-6.869-5.973zM54 115.037c-1 1.266-2.893 1.978-4.279 1.978-1.973 0-2.988-1.371-2.988-3.27 0-2.056 1.202-3.745 5.794-3.745H54v5.037zm15.611.644l-.835-3.608L65.02 100h-4.39l6.051 20h5.026c2.884-7 4.943-14 6.086-20h-4.271c-.671 5-2.016 10.424-3.911 15.681zm18.404-16.146c-2.889 0-5.411.714-7.467 1.622l.596 2.493c1.621-.595 3.722-1.147 5.778-1.147 2.846 0 4.078 1.147 4.078 3.521V108h-1.428c-6.923 0-10.045 2.585-10.045 6.624 0 3.479 2.056 5.407 5.93 5.407 2.492 0 4.349-.845 6.091-2.35l.318 2.319H95v-14.492c0-3.599-2.044-5.973-6.985-5.973zm-1.411 17.462c-1.975 0-3.046-1.363-3.046-3.261 0-2.055 1.149-3.736 5.736-3.736H91v5h-.067c-1.465 1-2.947 1.997-4.329 1.997zM36 115.373c0 3.271-.445 4.638-.979 5.701-.615 1.193-2.053 2.475-3.601 3.269l1.934 2.345c2.032-.749 3.943-2.078 5.092-3.757 1.15-1.723 1.554-3.491 1.554-7.867V93h-4v22.373z"></path>
            </svg>
          }
            />
          <SkillComp listing={[]} icon={
            <svg viewBox="0 0 128 128">
            <path d="M40 68V57.921C40 50.948 46.218 45 53.383 45h21.102C80.359 45 84 39.96 84 34.062V13.945c0-5.726-4.306-10.026-10.04-10.981a62.801 62.801 0 00-10.743-.862c-3.611.017-7.339.324-10.374.862C43.902 4.542 42 7.848 42 13.945V22h21v3H34.891c-6.14 0-11.516 3.53-13.198 10.552-1.939 8.047-2.025 13.202 0 21.605C23.195 63.411 26.782 68 32.921 68H40zm12.054-51.372c-2.19 0-3.964-1.795-3.964-4.013 0-2.229 1.773-4.039 3.964-4.039 2.182 0 3.964 1.811 3.964 4.039 0 2.218-1.782 4.013-3.964 4.013zm54.121 18.924C104.658 29.438 101.759 25 95.612 25H87v9.062C87 41.335 81.516 48 74.485 48H53.383C47.603 48 42 52.403 42 58.193V78.31c0 5.725 5.388 9.093 10.974 10.734 6.686 1.967 12.781 2.322 20.782 0C79.074 87.504 84 84.406 84 78.31V71H63v-3h32.611c6.14 0 8.428-4.416 10.563-10.843 2.206-6.618 2.112-13.115.001-21.605zM75.814 75.625c2.19 0 3.965 1.795 3.965 4.015 0 2.227-1.774 4.037-3.965 4.037-2.182 0-3.963-1.811-3.963-4.037 0-2.22 1.781-4.015 3.963-4.015zm-40.903 36.424c0-3.757-1.072-5.686-3.214-5.791a6.03 6.03 0 00-2.495.409c-.646.231-1.082.461-1.311.692v8.968c1.371.86 2.588 1.26 3.649 1.197 2.247-.148 3.371-1.971 3.371-5.475zm2.643.157c0 1.909-.447 3.493-1.348 4.753-1.003 1.427-2.394 2.16-4.172 2.201-1.34.043-2.721-.378-4.142-1.258v8.151l-2.298-.82V107.14c.377-.462.862-.859 1.451-1.196 1.368-.798 3.031-1.207 4.987-1.228l.033.032c1.788-.022 3.166.712 4.134 2.201.902 1.366 1.355 3.117 1.355 5.257zm14.049 5.349c0 2.56-.257 4.333-.77 5.318-.516.986-1.497 1.773-2.945 2.359-1.174.463-2.444.714-3.808.757l-.38-1.448c1.386-.188 2.362-.378 2.928-.566 1.114-.377 1.878-.955 2.298-1.73.337-.631.503-1.835.503-3.618v-.599a11.809 11.809 0 01-4.941 1.068c-1.132 0-2.13-.354-2.99-1.068-.966-.777-1.449-1.764-1.449-2.958v-9.566l2.299-.787v9.63c0 1.028.332 1.82.996 2.376s1.524.822 2.578.803c1.054-.022 2.183-.431 3.382-1.228v-11.234h2.299v12.491zm8.973 1.479a9.457 9.457 0 01-.757.032c-1.3 0-2.314-.309-3.038-.93-.722-.622-1.084-1.479-1.084-2.573v-9.054h-1.574v-1.446h1.574v-3.84l2.296-.817v4.657h2.583v1.446h-2.583v8.991c0 .862.231 1.474.694 1.83.397.295 1.029.463 1.889.506v1.198zm13.917-.189h-2.298v-8.873c0-.902-.211-1.68-.631-2.329-.485-.734-1.159-1.102-2.024-1.102-1.054 0-2.372.556-3.954 1.668v10.636h-2.298V97.637l2.298-.725v9.659c1.469-1.068 3.073-1.604 4.816-1.604 1.218 0 2.203.41 2.958 1.228.757.817 1.134 1.836 1.134 3.053v9.597h-.001zm12.218-7.157c0-1.444-.274-2.636-.82-3.579-.649-1.149-1.657-1.756-3.021-1.818-2.52.146-3.778 1.951-3.778 5.412 0 1.587.262 2.912.79 3.976.674 1.356 1.685 2.024 3.033 2.002 2.531-.02 3.796-2.017 3.796-5.993zm2.518.015c0 2.055-.526 3.765-1.575 5.131-1.154 1.528-2.749 2.296-4.783 2.296-2.017 0-3.589-.768-4.723-2.296-1.028-1.366-1.542-3.076-1.542-5.131 0-1.932.556-3.556 1.668-4.879 1.174-1.403 2.718-2.107 4.627-2.107 1.909 0 3.463.704 4.66 2.107 1.111 1.323 1.668 2.947 1.668 4.879zm13.178 7.142h-2.299v-9.376c0-1.028-.31-1.831-.928-2.409-.619-.576-1.443-.855-2.472-.833-1.091.021-2.13.378-3.116 1.069v11.549h-2.299v-11.833c1.323-.963 2.54-1.592 3.652-1.886 1.049-.274 1.974-.41 2.771-.41.545 0 1.059.053 1.542.158.903.209 1.637.596 2.203 1.164.631.629.946 1.384.946 2.267v10.54z"></path>
            </svg>
          }
            />

        </Components>
        <Space />
        <Copyright />

    </Container>


  );
}

export default Skills;
