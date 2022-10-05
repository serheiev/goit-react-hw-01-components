import { Section } from 'components/Section/Section';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Transaction } from './TransactionHistory/TransactionHistory';
import users from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Section>
        <Profile user={users} />
      </Section>

      <Section>
        <Statistics stats={data} title="Upload stats" />
      </Section>

      <Section>
        <FriendList friend={friends} />
      </Section>
      <Section>
        <Transaction transaction={transactions} />
      </Section>
    </>
  );
};
