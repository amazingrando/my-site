import Layout from '@/components/layout';
import Link from 'next/link';
import BackToProjects from '@/components/backToProjects';
import PageHeader from '@/components/pageHeader';

export default function Page() {
  return (
    <>
      <BackToProjects />

      <PageHeader title="Design in Good Company podcast" projectRole="Host" />

      <div className="prose lg:prose-lg mt-44">
        <p className="lead">
          Spark. Whoosh. BOOM. And like that the reign of the Sorcier came to a
          close thanks to the Gunpowder Revolution. No longer are the people
          oppressed by the powerful few wizards and their apprentices. People
          and wizards alike are ruled by representatives in the Republic.
          Knowledge is shared instead of hoarded. It is the start of a worldwide
          age of enlightenment.
        </p>
        <p>
          That was 20 years ago. The Sorcier have pushed back, hard, against the
          age of reason. You are a Lion in the service to the Royal Pride of
          Musketeers. Your job is to serve the Republic by responding to the
          threats of the tenacious Sorcier.
        </p>

        <h2>Gathering the Pride for a Mission</h2>
        <p>
          Florint: Florint was in the lab at the RPM headquarters hoping to get
          the results of a particularly interesting experiment regarding the
          reactive nature of gunpowder under the influence of different dragons
          au...Florint was in the lab. Ehsan approached him with the vague
          intent of "we need to do something". To be honest Florint was more
          distracted by the nature of the experiment, it's amazing what the
          introduction of a single variable to an already extremely
          comp...Florint was distracted. We paired up and headed in to hear
          about what was expected of the Pride today.
        </p>
        <h3>Investigating the Escape in La Magie de Prison</h3>
        <p>
          🏹 Ehsan: I did plan on just training all day. Just myself, my bow,
          and some targets, but as usual things can never seem to settle down in
          this city. A mission came to us from above and we’re tasked with with
          recapturing some escaped Sorcier caster. Had this been my homeland
          such traitors would have already been dealt with in a more permanent
          fashion, but this is not my home and so I need to keep with their laws
          (especially the ones of this organization).
        </p>
      </div>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
