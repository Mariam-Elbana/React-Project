import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ProfileSkills, ProfileSection, ProfileTitle, ProfileList, ProfileItem, ProfileItemSpan, SpanWeb, Skills, SkillsTitle, SkillsDesc, Bar, BarTitle, BarPerc, Parent, Span, ProfileTitleSpan, SkillsTitleSpan} from './style';

const Profile = () => {

  const [bar, setBar] = useState([]);

  useEffect (  () => {
    axios.get('Js/data.json').then( res => {
      setBar(res.data.profile);
    });
  }, [])

  const profileBars = bar.map( (barItem) => {
    return (
      <Bar key={barItem.id}>
        <BarTitle>{barItem.title}</BarTitle>
        <BarPerc>{barItem.percentage}</BarPerc>
        <Parent>
            <Span sp={barItem.id}></Span>
        </Parent>
      </Bar>
    );
  });

  return (
    <ProfileSkills>
        <div className="container">
          <ProfileSection>
              <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
              <ProfileList>
                  <ProfileItem>
                      <ProfileItemSpan>Name</ProfileItemSpan>
                      Hamza Nabil
                  </ProfileItem>
                  <ProfileItem>
                      <ProfileItemSpan>Birthday</ProfileItemSpan>
                      21/1/1996
                  </ProfileItem>
                  <ProfileItem>
                      <ProfileItemSpan>Address</ProfileItemSpan>
                      Ain shams
                  </ProfileItem>
                  <ProfileItem>
                      <ProfileItemSpan>Phone</ProfileItemSpan>
                      4444 5555 6666
                  </ProfileItem>
                  <ProfileItem>
                      <ProfileItemSpan>Email</ProfileItemSpan>
                      hamza@hamza.com
                  </ProfileItem>
                  <ProfileItem>
                      <ProfileItemSpan>Website</ProfileItemSpan>
                      <SpanWeb>www.google.com</SpanWeb>
                  </ProfileItem>
              </ProfileList>
          </ProfileSection>
            
          <Skills>

              <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
              <SkillsDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
              </SkillsDesc>

              {profileBars}

          </Skills>
            
        </div>
    </ProfileSkills>
  );
};

export default Profile;
