import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SocialMediaSection, Social, Icon, P, Span, SpanInfo } from './style.js';

const SocialMedia = () => {

  const [social, setSocial] = useState([]);

  useEffect( () => {
    axios.get('Js/data.json').then(res => {
      setSocial(res.data.social);
    })
  }, [] );

  const socials = social.map( (so) => {
    return (
      <Social key={so.id} item={so.category}>
        <Icon className={so.icon}></Icon>
        <P>
          <Span>{so.title}</Span>
          <SpanInfo>{so.body}</SpanInfo>
        </P>
      </Social>
    );
  });

  return (
    <SocialMediaSection>

      {socials}

    </SocialMediaSection>
  );
};

export default SocialMedia;
