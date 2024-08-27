import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata = () => {
  return {
    title: 'Terms and Conditions',
  }
}

const page = () => {
  return (
    <section className='max-w-7xl mx-auto flex flex-col p-4'>
      <h1 className='text-3xl text-center m-6'>TERMS AND CONDITIONS</h1>
      <p className='font-bold mb-4'>Last updated March 01, 2024</p>

      <h2 className='font-semibold mb-4'>AGREEMENT TO OUR LEGAL TERMS</h2>
      <p className='mb-4'>
        We are BizKit Express, We operate the website {''}
        <a
          href='http://www.bizkitexpress.com'
          className='text-blue-500 underline'
        >
          www.bizkitexpress.com
        </a>
        , as well as any other related products and services that refer or link
        to these legal terms (the &quot;Legal Terms&quot;) (collectively, the
        &quot;Services&quot;).
      </p>
      <p className='mb-4'>
        You can contact us by email at {''}
        <a
          href='mailto:info@bizkitexpress.com'
          className='text-blue-500 underline'
        >
          info@bizkitexpress.com
        </a>
        .
      </p>

      <p className='mb-4'>
        These Legal Terms constitute a legally binding agreement made between
        you, whether personally or on behalf of an entity (&quot;you&quot;), and
        BizKit Express, concerning your access to and use of the Services. You
        agree that by accessing the Services, you have read, understood, and
        agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH
        ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING
        THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
      </p>

      <p className='mb-4'>
        Terms and Conditions and Privacy Policy will be added to the
        website&apos;s navigation links, where you can find and read them. Also
        before using Stripe payment services users will obliged to accept the
        terms and conditions.
      </p>

      <p className='mb-4'>
        We recommend that you print a copy of these Legal Terms for your
        records.
      </p>

      <Accordion
        type='single'
        collapsible
        className='w-full md:w-4/5 p-4 md:p-8 mx-auto'
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger>1. OUR SERVICES</AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              The information provided when using the Services is not intended
              for distribution to or use by any person or entity in any
              jurisdiction or country where such distribution or use would be
              contrary to law or regulation or which would subject us to any
              registration requirement within such jurisdiction or country.
              Accordingly, those persons who choose to access the Services from
              other locations do so on their own initiative and are solely
              responsible for compliance with local laws, if and to the extent
              local laws are applicable.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>2. INTELLECTUAL PROPERTY RIGHTS</AccordionTrigger>
          <AccordionContent>
            <h3 className='font-semibold mb-4'>Our intellectual property</h3>
            <p className='mb-4'>
              We are the owner or the licensee of all intellectual property
              rights in our Services, including all source code, databases,
              functionality, software, website designs, audio, video, text,
              photographs, and graphics in the Services (collectively, the
              &quot;Content&quot;), as well as the trademarks, service marks,
              and logos contained therein (the &quot;Marks&quot;).
            </p>
            <p className='mb-4'>
              Our Content and Marks are protected by copyright and trademark
              laws (and various other intellectual property rights and unfair
              competition laws) and treaties in the United States and around the
              world.
            </p>
            <p className='mb-4'>
              The Content and Marks are provided in or through the Services
              &quot;AS IS&quot; for your personal, non-commercial use or
              internal business purpose only.
            </p>

            <h3 className='font-semibold mb-4'>Your use of our Services</h3>
            <p className='mb-4'>
              Subject to your compliance with these Legal Terms, including the
              &quot;PROHIBITED ACTIVITIES&quot; section below, we grant you a
              non-exclusive, non-transferable, revocable license to:
            </p>
            <ul className='list-disc list-inside mb-4'>
              <li>access the Services; and</li>
              <li>
                download or print a copy of any portion of the Content to which
                you have properly gained access.
              </li>
              <li>
                solely for your personal, non-commercial use or internal
                business purpose.
              </li>
            </ul>
            <p className='mb-4'>
              Except as set out in this section or elsewhere in our Legal Terms,
              no part of the Services and no Content or Marks may be copied,
              reproduced, aggregated, republished, uploaded, posted, publicly
              displayed, encoded, translated, transmitted, distributed, sold,
              licensed, or otherwise exploited for any commercial purpose
              whatsoever, without our express prior written permission.
            </p>
            <p className='mb-4'>
              If you wish to make any use of the Services, Content, or Marks
              other than as set out in this section or elsewhere in our Legal
              Terms, please address your request to:{' '}
              <a
                href='mailto:info@bizkitexpress.com'
                className='text-blue-500 underline'
              >
                info@bizkitexpress.com
              </a>
              . If we ever grant you the permission to post, reproduce, or
              publicly display any part of our Services or Content, you must
              identify us as the owners or licensors of the Services, Content,
              or Marks and ensure that any copyright or proprietary notice
              appears or is visible on posting, reproducing, or displaying our
              Content.
            </p>
            <p className='mb-4'>
              We reserve all rights not expressly granted to you in and to the
              Services, Content, and Marks.
            </p>
            <p className='mb-4'>
              Any breach of these Intellectual Property Rights will constitute a
              material breach of our Legal Terms and your right to use our
              Services will terminate immediately.
            </p>

            <h3 className='font-semibold text-lg mt-4'>Your submissions</h3>
            <p className='mb-4'>
              Please review this section and the &quot;PROHIBITED
              ACTIVITIES&quot; section carefully prior to using our Services to
              understand the (a) rights you give us and (b) obligations you have
              when you post or upload any content through the Services.
            </p>
            <p className='mb-4'>
              Submissions: By directly sending us any question, comment,
              suggestion, idea, feedback, or other information about the
              Services (&quot;Submissions&quot;), you agree to assign to us all
              intellectual property rights in such Submission. You agree that we
              shall own this Submission and be entitled to its unrestricted use
              and dissemination for any lawful purpose, commercial or otherwise,
              without acknowledgment or compensation to you.
            </p>
            <p className='mb-4'>
              You are responsible for what you post or upload: By sending us
              Submissions through any part of the Services you:
            </p>
            <ul className='list-disc list-inside mb-4'>
              <li>
                &quot;PROHIBITED ACTIVITIES&quot; and will not post, send,
                publish, upload, or transmit through the Services any Submission
                that is illegal, harassing, hateful, harmful, defamatory,
                obscene, bullying, abusive, discriminatory, threatening to any
                person or group, sexually explicit, false, inaccurate,
                deceitful, or misleading;
              </li>
              <li>
                to the extent permissible by applicable law, waive any and all
                moral rights to any such Submission;
              </li>
              <li>
                warrant that any such Submission are original to you or that you
                have the necessary rights and licenses to submit such
                Submissions and that you have full authority to grant us the
                above-mentioned rights in relation to your Submissions; and
              </li>
              <li>
                warrant and represent that your Submissions do not constitute
                confidential information.
              </li>
              <li>
                You are solely responsible for your Submissions and you
                expressly agree to reimburse us for any and all losses that we
                may suffer because of your breach of (a) this section, (b) any
                third party&apos;s intellectual property rights, or (c)
                applicable law.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>3. USER REPRESENTATIONS</AccordionTrigger>
          <AccordionContent>
            <h3 className='font-semibold mb-4'>
              By using the Services, you represent and warrant that:
            </h3>
            <ol className='list-decimal list-inside mb-4'>
              <li>
                you have the legal capacity and you agree to comply with these
                Legal Terms;
              </li>
              <li>
                you are not a minor in the jurisdiction in which you reside;
              </li>
              <li>
                you will not access the Services through automated or non-human
                means, whether through a bot, script or otherwise;
              </li>
              <li>
                you will not use the Services for any illegal or unauthorized
                purpose; and
              </li>
              <li>
                your use of the Services will not violate any applicable law or
                regulation.
              </li>
            </ol>
            <p className='mb-4'>
              If you provide any information that is untrue, inaccurate, not
              current, or incomplete, we have the right to suspend or terminate
              your account and refuse any and all current or future use of the
              Services (or any portion thereof).
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger>4. PURCHASES AND PAYMENT</AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              In Short: We accept payments through Stripe and may support
              multiple currencies. You agree to provide current, complete, and
              accurate purchase and account information for all purchases made
              via the Services. You further agree to promptly update account and
              payment information, including email address and payment method,
              so that we can complete your transactions and contact you as
              needed. All payments shall be processed by Stripe. We may accept
              payments in multiple currencies, not just EUR.
            </p>
            <p className='mb-4'>
              You agree to pay all charges at the prices then in effect for your
              purchases and any applicable shipping fees, and you authorize us
              to charge your chosen payment provider for any such amounts upon
              placing your order. We reserve the right to correct any errors or
              mistakes in pricing, even if we have already requested or received
              payment.
            </p>
            <p className='mb-4'>
              We reserve the right to refuse any order placed through the
              Services. We may, in our sole discretion, limit or cancel
              quantities purchased per person, per household, or per order.
              These restrictions may include orders placed by or under the same
              customer account, the same payment method, and/or orders that use
              the same billing or shipping address. We reserve the right to
              limit or prohibit orders that, in our sole judgment, appear to be
              placed by dealers, resellers, or distributors.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-5'>
          <AccordionTrigger>5. CANCELLATION</AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              Your cancellation will take effect at the end of the current paid
              term.
            </p>
            <p className='mb-4'>
              If you are unsatisfied with our Services, please email us at{' '}
              <a
                href='mailto:info@bizkitexpress.com'
                className='text-blue-500 underline'
              >
                info@bizkitexpress.com
              </a>
              .
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-6'>
          <AccordionTrigger>6. PROHIBITED ACTIVITIES</AccordionTrigger>
          <AccordionContent>
            <h3 className='font-semibold mb-2'>
              You may not access or use the Services for any purpose other than
              that for which we make the Services available.
            </h3>
            <p className='mb-4'>
              The Services may not be used in connection with any commercial
              endeavors except those that are specifically endorsed or approved
              by us.
            </p>

            <h3 className='font-semibold mb-4'>
              As a user of the Services, you agree not to:
            </h3>
            <ul className='list-disc list-inside mb-4'>
              <li>
                Systematically retrieve data or other content from the Services
                to create or compile, directly or indirectly, a collection,
                compilation, database, or directory without written permission
                from us.
              </li>
              <li>
                Trick, defraud, or mislead us and other users, especially in any
                attempt to learn sensitive account information such as user
                passwords.
              </li>
              <li>
                Circumvent, disable, or otherwise interfere with
                security-related features of the Services, including features
                that prevent or restrict the use or copying of any Content or
                enforce limitations on the use of the Services and/or the
                Content contained therein.
              </li>
              <li>
                Disparage, tarnish, or otherwise harm, in our opinion, us and/or
                the Services.
              </li>
              <li>
                Use any information obtained from the Services in order to
                harass, abuse, or harm another person.
              </li>
              <li>
                Make improper use of our support services or submit false
                reports of abuse or misconduct.
              </li>
              <li>
                Use the Services in a manner inconsistent with any applicable
                laws or regulations.
              </li>
              <li>
                Engage in unauthorized framing of or linking to the Services.
              </li>
              <li>
                Upload or transmit (or attempt to upload or to transmit)
                viruses, Trojan horses, or other material, including excessive
                use of capital letters and spamming (continuous posting of
                repetitive text), that interferes with any party&apos;s
                uninterrupted use and enjoyment of the Services or modifies,
                impairs, disrupts, alters, or interferes with the use, features,
                functions, operation, or maintenance of the Services.
              </li>
              <li>
                Engage in any automated use of the system, such as using scripts
                to send comments or messages, or using any data mining, robots,
                or similar data gathering and extraction tools.
              </li>
              <li>
                Delete the copyright or other proprietary rights notice from any
                Content.
              </li>
              <li>
                Attempt to impersonate another user or person or use the
                username of another user.
              </li>
              <li>
                Upload or transmit (or attempt to upload or to transmit) any
                material that acts as a passive or active information collection
                or transmission mechanism, including without limitation, clear
                graphics interchange formats (&quot;gifs&quot;), 1&times;1
                pixels, web bugs, cookies, or other similar devices (sometimes
                referred to as &quot;spyware&quot; or &quot;passive collection
                mechanisms&quot; or &quot;pcms&quot;).
              </li>
              <li>
                Interfere with, disrupt, or create an undue burden on the
                Services or the networks or services connected to the Services.
              </li>
              <li>
                Harass, annoy, intimidate, or threaten any of our employees or
                agents engaged in providing any portion of the Services to you.
              </li>
              <li>
                Attempt to bypass any measures of the Services designed to
                prevent or restrict access to the Services, or any portion of
                the Services.
              </li>
              <li>
                Copy or adapt the Services&apos; software, including but not
                limited to Flash, PHP, HTML, JavaScript, or other code.
              </li>
              <li>
                Except as permitted by applicable law, decipher, decompile,
                disassemble, or reverse engineer any of the software comprising
                or in any way making up a part of the Services.
              </li>
              <li>
                Except as may be the result of standard search engine or
                Internet browser usage, use, launch, develop, or distribute any
                automated system, including without limitation, any spider,
                robot, cheat utility, scraper, or offline reader that accesses
                the Services, or use or launch any unauthorized script or other
                software.
              </li>
              <li>
                Use a buying agent or purchasing agent to make purchases on the
                Services.
              </li>
              <li>
                Make any unauthorized use of the Services, including collecting
                usernames and/or email addresses of users by electronic or other
                means for the purpose of sending unsolicited email, or creating
                user accounts by automated means or under false pretenses.
              </li>
              <li>
                Use the Services as part of any effort to compete with us or
                otherwise use the Services and/or the Content for any
                revenue-generating endeavor or commercial enterprise.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-7'>
          <AccordionTrigger>7. USER GENERATED CONTRIBUTIONS</AccordionTrigger>
          <AccordionContent>
            <h3 className='font-semibold mb-4'>
              The Services does not offer users to submit or post content.
            </h3>
            <p className='mb-4'>
              We may provide you with the opportunity to create, submit, post,
              display, transmit, perform, publish, distribute, or broadcast
              content and materials to us or on the Services, including but not
              limited to text, writings, video, audio, photographs, graphics,
              comments, suggestions, or personal information or other material
              (collectively, &quot;Contributions&quot;). Contributions may be
              viewable by other users of the Services and through third-party
              websites. As such, any Contributions you transmit may be treated
              in accordance with the Services&apos; Privacy Policy. When you
              create or make available any Contributions, you thereby represent
              and warrant that:
            </p>
            <ol className='list-decimal list-inside'>
              <li className='mb-2'>
                Ownership: The Contributions are your original work and you have
                all rights necessary to make them available through the
                Services.
              </li>
              <li className='mb-2'>
                Non-Infringement: The Contributions do not and will not infringe
                or violate any rights of any third party, including any
                copyright, trademark, privacy, publicity, or other personal or
                proprietary rights.
              </li>
              <li className='mb-2'>
                Compliance with Law: The Contributions comply with all
                applicable laws, rules, and regulations.
              </li>
              <li className='mb-2'>
                Non-Harmful: The Contributions are not harmful, fraudulent,
                deceptive, threatening, harassing, defamatory, obscene, or
                otherwise objectionable.
              </li>
              <li className='mb-2'>
                Accuracy: The Contributions are accurate, complete, and true to
                the best of your knowledge.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-8'>
          <AccordionTrigger>8. CONTRIBUTION LICENSE</AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              You and Services agree that we may access, store, process, and use
              any information and personal data that you provide following the
              terms of the Privacy Policy and your choices (including settings).
            </p>
            <p className='mb-4'>
              By submitting suggestions or other feedback regarding the
              Services, you agree that we can use and share such feedback for
              any purpose without compensation to you.
            </p>
            <p className='mb-4'>
              We do not assert any ownership over your Contributions. You retain
              full ownership of all of your Contributions and any intellectual
              property rights or other proprietary rights associated with your
              Contributions. We are not liable for any statements or
              representations in your Contributions provided by you in any area
              on the Services. You are solely responsible for your Contributions
              to the Services and you expressly agree to exonerate us from any
              and all responsibility and to refrain from any legal action
              against us regarding your Contributions.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-9'>
          <AccordionTrigger>9. SERVICES MANAGEMENT</AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              We reserve the right, but not the obligation, to: (1) monitor the
              Services for violations of these Legal Terms; (2) take appropriate
              legal action against anyone who, in our sole discretion, violates
              the law or these Legal Terms, including without limitation,
              reporting such user to law enforcement authorities; (3) in our
              sole discretion and without limitation, refuse, restrict access
              to, limit the availability of, or disable (to the extent
              technologically feasible) any of your Contributions or any portion
              thereof; (4) in our sole discretion and without limitation,
              notice, or liability, to remove from the Services or otherwise
              disable all files and content that are excessive in size or are in
              any way burdensome to our systems; and (5) otherwise manage the
              Services in a manner designed to protect our rights and property
              and to facilitate the proper functioning of the Services.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-10'>
          <AccordionTrigger>10. PRIVACY POLICY</AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              We care about data privacy and security. Please review our Privacy
              Policy. By using the Services, you agree to be bound by our
              Privacy Policy, which is incorporated into these Legal Terms.
              Please be advised the Services are hosted in Eropean Union. If you
              access the Services from any other region of the world with laws
              or other requirements governing personal data collection, use, or
              disclosure that differ from applicable laws in European Union,
              then through your continued use of the Services, you are
              transferring your data to European Union, and you expressly
              consent to have your data transferred to and processed in European
              Union.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-11'>
          <AccordionTrigger>11. TERM AND TERMINATION</AccordionTrigger>
          <AccordionContent>
            <h3 className='font-semibold mb-4'>
              These Legal Terms shall remain in full force and effect while you
              use the Services.
            </h3>
            <p className='mb-4'>
              WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE
              RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
              LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING
              BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR
              FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
              REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL
              TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE
              YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR
              INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR
              SOLE DISCRETION.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-12'>
          <AccordionTrigger>
            12. MODIFICATIONS AND INTERRUPTIONS
          </AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              If we terminate or suspend your account for any reason, you are
              prohibited from registering and creating a new account under your
              name, a fake or borrowed name, or the name of any third party,
              even if you may be acting on behalf of the third party. In
              addition to terminating or suspending your account, we reserve the
              right to take appropriate legal action, including without
              limitation pursuing civil, criminal, and injunctive redress.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-13'>
          <AccordionTrigger>13. GOVERNING LAW</AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              If your habitual residence is in the EU, and you are a consumer,
              you additionally possess the protection provided to you by
              obligatory provisions of the law in your country to residence.
              BizKit Express and yourself both agree to submit to the
              non-exclusive jurisdiction of the courts, which means that you may
              make a claim to defend your consumer protection rights in regards
              to these Legal Terms in the EU country in which you reside.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-14'>
          <AccordionTrigger>14. DISPUTE RESOLUTION</AccordionTrigger>
          <AccordionContent>
            <h3 className='font-semibold text-lg mt-4'>
              Informal Negotiations
            </h3>
            <p className='mb-4'>
              To expedite resolution and control the cost of any dispute,
              controversy, or claim related to these Legal Terms (each a
              &quot;Dispute&quot; and collectively, the &quot;Disputes&quot;)
              brought by either you or us (individually, a &quot;Party&quot; and
              collectively, the &quot;Parties&quot;), the Parties agree to first
              attempt to negotiate any Dispute (except those Disputes expressly
              provided below) informally for at least thirty (30) days before
              initiating arbitration. Such informal negotiations commence upon
              written notice from one Party to the other Party.
            </p>

            <h3 className='font-semibold text-lg mt-4'>Binding Arbitration</h3>
            <p className='mb-4'>
              Any dispute arising from the relationships between the Parties to
              these Legal Terms shall be determined by one arbitrator who will
              be chosen in accordance with the Arbitration and Internal Rules of
              the European Court of Arbitration being part of the European
              Centre of Arbitration having its seat in Strasbourg, and which are
              in force at the time the application for arbitration is filed, and
              of which adoption of this clause constitutes acceptance.
            </p>

            <h3 className='font-semibold text-lg mt-4'>Restrictions</h3>
            <p className='mb-4'>
              The Parties agree that any arbitration shall be limited to the
              Dispute between the Parties individually. To the full extent
              permitted by law, (a) no arbitration shall be joined with any
              other proceeding; (b) there is no right or authority for any
              Dispute to be arbitrated on a class-action basis or to utilize
              class action procedures; and (c) there is no right or authority
              for any Dispute to be brought in a purported representative
              capacity on behalf of the general public or any other persons.
            </p>
            <h3 className='font-semibold text-lg mt-4'>
              Exceptions to Informal Negotiations and Arbitration
            </h3>
            <p className='mb-4'>
              The Parties agree that the following Disputes are not subject to
              the above provisions concerning informal negotiations binding
              arbitration: (a) any Disputes seeking to enforce or protect, or
              concerning the validity of, any of the intellectual property
              rights of a Party; (b) any Dispute related to, or arising from,
              allegations of theft, piracy, invasion of privacy, or unauthorized
              use; and (c) any claim for injunctive relief. If this provision is
              found to be illegal or unenforceable, then neither Party will
              elect to arbitrate any Dispute falling within that portion of this
              provision found to be illegal or unenforceable and such Dispute
              shall be decided by a court of competent jurisdiction within the
              courts listed for jurisdiction above, and the Parties agree to
              submit to the personal jurisdiction of that court.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-15'>
          <AccordionTrigger>15. CORRECTIONS</AccordionTrigger>
          <AccordionContent>
            <h3 className='font-semibold mb-4'>
              There may be information on the Services that contains
              typographical errors, inaccuracies, or omissions, including
              descriptions, pricing, availability, and various other
              information.
            </h3>
            <p className='mb-4'>
              We reserve the right to correct any errors, inaccuracies, or
              omissions and to change or update the information on the Services
              at any time, without prior notice.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-16'>
          <AccordionTrigger>16. DISCLAIMER</AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
              AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO
              THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
              EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE
              THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT
              THE ACCURACY OR COMPLETENESS OF THE SERVICES&apos; CONTENT OR THE
              CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE
              SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY
              (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS,
              (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
              RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY
              UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND
              ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED
              THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR
              FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE
              LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY
              THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND
              MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A
              RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE
              MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE,
              GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE
              ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY
              HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED
              IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO
              OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION
              BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
              AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR
              IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
              CAUTION WHERE APPROPRIATE.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-17'>
          <AccordionTrigger>17. LIMITATIONS OF LIABILITY</AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
              OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
              HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
              LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE
              FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER OF
              THE AMOUNT PAID, IF ANY, BY YOU TO US OR $39.00 USD. CERTAIN US
              STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON
              IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN
              DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE
              DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE
              ADDITIONAL RIGHTS.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-18'>
          <AccordionTrigger>18. INDEMNIFICATION</AccordionTrigger>
          <AccordionContent>
            <h3 className='font-semibold mb-4'>
              You agree to defend, indemnify, and hold us harmless, including
              our subsidiaries, affiliates, and all of our respective officers,
              agents, partners, and employees, from and against any loss,
              damage, liability, claim, or demand, including reasonable
              attorneys&apos; fees and expenses, made by any third party due to
              or arising out of:
            </h3>
            <ol className='list-decimal list-inside mb-4'>
              <li>use of the Services;</li>
              <li>breach of these Legal Terms;</li>
              <li>
                any breach of your representations and warranties set forth in
                these Legal Terms;
              </li>
              <li>
                your violation of the rights of a third party, including but not
                limited to intellectual property rights; or
              </li>
              <li>
                any overt harmful act toward any other user of the Services with
                whom you connected via the Services.
              </li>
            </ol>
            <p className='mb-4'>
              Notwithstanding the foregoing, we reserve the right, at your
              expense, to assume the exclusive defense and control of any matter
              for which you are required to indemnify us, and you agree to
              cooperate, at your expense, with our defense of such claims. We
              will use reasonable efforts to notify you of any such claim,
              action, or proceeding which is subject to this indemnification
              upon becoming aware of it.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-19'>
          <AccordionTrigger>19. USER DATA</AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              In Short: We only maintain minimal data necessary for the
              functionality of our Services. We only maintain data related to
              your language preferences. We do not perform routine backups of
              data as we do not collect or store any personal information. You
              agree that we shall have no liability to you for any loss or
              corruption of any such data.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-20'>
          <AccordionTrigger>
            20. ELECTRONIC COMMUNICATIONS, TRANSACTIONS AND SIGNATURES
          </AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              Visiting the Services, sending us emails, and completing online
              forms constitute electronic communications. You consent to receive
              electronic communications, and you agree that all agreements,
              notices, disclosures, and other communications we provide to you
              electronically, via email and on the Services, satisfy any legal
              requirement that such communication be in writing. YOU HEREBY
              AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND
              OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES,
              AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA
              THE SERVICES. You hereby waive any rights or requirements under
              any statutes, regulations, rules, ordinances, or other laws in any
              jurisdiction which require an original signature or delivery or
              retention of non-electronic records, or to payments or the
              granting of credits by any means other than electronic means.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-21'>
          <AccordionTrigger>21. MISCELLANEOUS</AccordionTrigger>
          <AccordionContent>
            <p className='mb-4'>
              These Legal Terms and any policies or operating rules posted by us
              on the Services or in respect to the Services constitute the
              entire agreement and understanding between you and us. Our failure
              to exercise or enforce any right or provision of these Legal Terms
              shall not operate as a waiver of such right or provision. These
              Legal Terms operate to the fullest extent permissible by law. We
              may assign any or all of our rights and obligations to others at
              any time. We shall not be responsible or liable for any loss,
              damage, delay, or failure to act caused by any cause beyond our
              reasonable control. If any provision or part of a provision of
              these Legal Terms is determined to be unlawful, void, or
              unenforceable, that provision or part of the provision is deemed
              severable from these Legal Terms and does not affect the validity
              and enforceability of any remaining provisions. There is no joint
              venture, partnership, employment or agency relationship created
              between you and us as a result of these Legal Terms or use of the
              Services. You agree that these Legal Terms will not be construed
              against us by virtue of having drafted them. You hereby waive any
              and all defenses you may have based on the electronic form of
              these Legal Terms and the lack of signing by the parties hereto to
              execute these Legal Terms.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-22'>
          <AccordionTrigger>22. CONTACT US</AccordionTrigger>
          <AccordionContent>
            <h3 className='font-semibold mb-4'>
              In order to resolve a complaint regarding the Services or to
              receive further information regarding use of the Services, please
              contact us at:
            </h3>
            <p className='mb-4'>
              BizKit Express
              <br />
              European Union
              <a
                href='mailto:info@bizkitexpress.com'
                className='text-blue-500 underline block'
              >
                info@bizkitexpress.com
              </a>
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-23'>
          <AccordionTrigger>23. REFUNDS</AccordionTrigger>
          <AccordionContent>
            <div className='mb-4'>
              We offer refunds in the following scenarios:
              <ol className='list-decimal flex flex-col my-4 gap-2 ml-4 sm:ml-6'>
                <li>
                  Domain Setup Guarantee: Once the client approves their website
                  and submits payment, we promptly initiate domain setup. Should
                  we encounter any issues preventing us from configuring the
                  chosen domain, we will provide a full refund without delay.
                </li>
                <li>
                  Hosting Service Issue: We use Vercel for our website hosting,
                  trusted for its excellent services. If your website faces
                  frequent downtime because of hosting problems, you are
                  entitled to a refund. We will calculate the refund based on
                  the remaining months of service, counting each month in
                  progress as fully paid.
                </li>
                <li>
                  Extreme Situations: If any extreme situations arise that are
                  not addressed above, clients have the right to request a
                  refund. We prioritize our clients&apos; satisfaction and will
                  assess each case separately to guarantee a just outcome.
                </li>
              </ol>
              We value openness and making our customers happy. These policies
              show how dedicated we are to our clients. Remember, these
              situations are rare, and we always aim to offer smooth service.
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default page
