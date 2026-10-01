import React from 'react';
import Card from './Card';
import Avatar from './Avatar';
import Tag from './Tag';
import { Heading, Text } from './Typography';

const ProfileCard = ({ name, role, email, avatar, tags = [], actions, ...props }) => {
  return (
    <Card style={{ width: 320 }} actions={actions} {...props}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Avatar size={64} src={avatar}>{!avatar && name?.[0]}</Avatar>
        <div>
          <Heading level={5} style={{ margin: 0 }}>{name}</Heading>
          <Text type="secondary">{role}</Text>
          {email && <div><Text type="secondary" style={{ fontSize: 12 }}>{email}</Text></div>}
        </div>
      </div>
      {tags.length > 0 && (
        <div style={{ marginTop: 16 }}>
          {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
      )}
    </Card>
  );
};

export default ProfileCard;
