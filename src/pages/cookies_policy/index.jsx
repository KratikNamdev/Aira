import React from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Container
} from "@mui/material";
import Colors from '@/common/Colorscomponents';

const index = () => {
  return (
    <Box sx={{ mt: 15 }}>
      <Container maxWidth="md">
        <Typography
          variant="h5"
          sx={{
            mb: 1,
            fontWeight: 600,
            pl: 1,
            borderLeft: `10px solid ${Colors.airaSecondary}`,
          }}
        >
          Cookie Policy for AIRA
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 600, my: 2 }}>
          Last Modified: 1 May, 2023
        </Typography>
        <Typography variant="subtitle2" sx={{ lineHeight: 2 }}>
          The following describes the AIRA (“AIRA”,” the “Company”, “we,” “us,” or
          “our”) privacy policy and the manner in which AIRA collects, uses,
          shares and secures the personal information that it collects or receives
          via its website www.aira.fr, any subdomain, other AIRA website and
          mobile applications (collectively, the “Sites”), or through your use of
          the services we provide to you. It also describes your choices regarding
          use, access and correction of your personal information.
        </Typography>
        <Typography variant="subtitle2" sx={{ lineHeight: 2, my: 3 }}>
          For purposes of the European Union General Data Protection Regulation
          (GDPR), Automation Anywhere is both a data controller and processor of
          personal information collected by it via the Site.
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          What is Personal Information?
        </Typography>
        <Typography variant="subtitle2" sx={{ lineHeight: 2, my: 1 }}>
          As used in this policy, “personal information” means any information
          that may be used, either alone or in combination with other information,
          to identify an individual. When we combine any non-personal information
          with personal information (e.g., technical information, such as the type
          of browser or operating system that you use), we treat the combined
          information as personal information.
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>
          Collection of Personal Information
        </Typography>
        <Box sx={{ pl: 3, mt: 2 }}>
          <ol gap={2}>
            <li style={{ marginTop: "20px" }}>
              <Box>
                <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
                 
                    Personal Information You Provide To Us.
                
                </Typography>
              </Box>
            </li>
            <li style={{ marginTop: "20px" }}>
              <Box>
                <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
                 
                    AIRA may collect certain personal information when someone
                    voluntarily sends
                
                  a direct mail inquiry, an email or online registration,
                  registers to download documents from the Sites, participates in
                  seminars or webinars, requests Company information at
                  tradeshows, applies for a job via the Career section of our
                  Sites, requests information, or purchases goods or services, via
                  the Sites. Examples of such personal information include, but
                  are not limited to, individual names, telephone numbers, email
                  addresses, company name, mailing address, account user name and
                  password, job title and financial information such as a credit
                  or debit card number. If you apply for a job via the Sites, we
                  may also collect personal information via your resume or any
                  cover letter you choose to upload, or via any social media
                  profile to which you elect to provide access.
                  <br />
                  <br />
                  We process personal information you provide to us either in
                  connection with our legitimate business interests, or to the
                  extent necessary for performance of a contract with you, your
                  company, or our customer.
                </Typography>
              </Box>
            </li>
            <li style={{ marginTop: "20px" }}>
              <Box>
                <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
                
                    Personal Information Collected Through Cookies and Similar
                    Technologies
                
                  AIRA may collect certain information, including personal
                  information, automatically from visitors to its Sites, and those
                  of its subsidiaries, including the IP address, time visited,
                  pages viewed and related information. When you visit the Sites,
                  open emails from AIRA, use its apps or interact with its related
                  tools, widgets or plug-ins, AIRA may collect certain information
                  by automated means, such as through cookies, web beacons, local
                  storage, scripts, pixels and web server logs. The information
                  collected in this manner may include your IP address, unique
                  device identifier, browser characteristics, domain and other
                  system settings, search queries, device characteristics,
                  operating system type, language preferences, referring URLs,
                  actions taken on the Sites, dates and times of Site visits,
                  metadata and other information associated with other files
                  stored on your device.
                  <br />
                  <br />
                  We process personal information collected through cookies or
                  similar technologies either in connection with our legitimate
                  business interests in operating the Sites, performing the
                  services, or operating our business, or otherwise to the extent
                  you have agreed that we may do so.
                </Typography>
              </Box>
            </li>
            <li style={{ marginTop: "20px" }}>
              <Box>
                <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
                  
                    Mobile Applications
                 
                  When you download and use our mobile applications, we may
                  automatically collect information on the type of device you use,
                  operating system and version and system and performance
                  information. We collect this information to help us measure app
                  usage and better understand user demographics and event
                  attendance. With your consent, we may send you push
                  notifications from time-to-time in order to update you about any
                  events or promotions that we may be running. If you no longer
                  wish to receive these types of communications, you may turn them
                  off at the device level.
                  <br />
                  <br />
                  We process personal information collected via our mobile
                  applications in connection with our legitimate business
                  interests in operating the Sites, performing the services, or
                  operating our business, or otherwise to the extent you have
                  agreed that we may do so.
                </Typography>
              </Box>
            </li>
            <li style={{ marginTop: "20px" }}>
              <Box>
                <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
                 
                    Personal Information Collected Through Use of Our Services
                 
                  AIRA may collect certain personal information that is provided
                  in the course of the use of our services. This includes personal
                  information contained in semi-structured and unstructured data
                  hidden in electronic documents, images and emails provided by
                  our customers when using our services. This data will be
                  processed for the purposes of operating our Sites and providing
                  our services. We also use this data for our internal training
                  and quality purposes, and to enhance, research and analyze our
                  service offerings and models. Examples of such personal
                  information include, but are not limited to, individual names,
                  telephone numbers, email addresses, job titles and contact
                  information contained in invoices or emails. Personal
                  information may relate to our customer’s employees, contractors
                  or their customers or service providers.
                  <br />
                  <br />
                  The legal basis for processing this personal information is (i)
                  our legitimate interests, namely performing our services, or
                  monitoring and improving our Sites and services, or (ii)
                  necessity for performance of a contract between you, your
                  company or our customer, and us.
                </Typography>
              </Box>
            </li>
          </ol>
        </Box>
        {/* Uses of Personal Information */}
        <Box>
          <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
            <b style={{ color: Colors.airaSecondary, fontSize: "20px" }}>
              Uses of Personal Information
            </b>
          </Typography>
          <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
            AIRA uses your personal information to monitor the performance and
            improve the quality of its Sites, respond to requests about the
            Company and its business, provide information about products and
            services, fulfill customer requests, and for other business purposes
            and/or to comply with various legal and regulatory obligations. With
            your consent, AIRA may also use your personal information to send you
            information about its other products and services and for other
            specified marketing purposes. Unless we obtain your consent to
            processing of your personal information, AIRA processes your personal
            information either for performance of a contract with you or in
            circumstances where it has a legitimate interest to do so. <br />
            <br /> AIRA may use information collected through cookies, web
            beacons, pixels, web server logs and other automated means for
            purposes such as (a) customizing user visits to the Sites, (b)
            delivering content tailored to users’ interests and the manner in
            which our users browse the Sites, and (c) managing the Sites and other
            aspects of its business.
            <br />
            <br />
            You can change your cookies settings in your browser, however please
            note that without cookies you may not be able to use all of the
            features of the Sites. For more information about the cookies we use
            on the Sites, please see our Cookies Policy section.
          </Typography>
        </Box>
        {/* Uses of Personal Information */}
        {/* Sharing of personal Info */}
        <Typography variant="body1" sx={{ lineHeight: 2, my: 2 }}>
          <b style={{ color: Colors.airaSecondary, fontSize: "20px" }}>
            Sharing of Personal Information
          </b>
        </Typography>
        <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
          AIRA may share your personal information with its affiliates and
          subsidiaries, and/or with its business partners, in order to respond to
          customer needs or otherwise provide services to customers as requested.
          AIRA may also, with your consent, engage in joint marketing activities
          with such third parties and/or disclose personal information to third
          parties for their own direct marketing purposes. Whereas our data
          practices and your choice options are described in this Privacy Policy,
          we encourage you to consult the third party’s privacy policy to ensure
          that you understand how it intends to use your information and how you
          may exercise control over it. <br />
          <br />
          AIRA may also share your information with its third-party agents who may
          be acting on its behalf and pursuant to its instructions to assist in
          our business activities, including, for example, providing notice of an
          upcoming webinar or tradeshow that may be of interest to the target
          audience, providing customer service, payment processing or providing
          storage services.
          <br /> <br />
          AIRA may disclose your personal information if it is required to do so
          by law or court order, to enforce or apply its Terms or if it believes
          in good faith that such release is necessary or appropriate to protect
          the rights, property, or safety of its company, customers, affiliates or
          others.
          <br /> <br />
          AIRA also may share or transfer information, including your personal
          information, in connection with the sale, transfer, acquisition, merger,
          acquisition, divestiture, restructuring, reorganization, dissolution,
          bankruptcy or other change or ownership or control by AIRA or any
          affiliated company (in each case, whether in whole or in part). When one
          of these events occurs, AIRA will use reasonable efforts to notify users
          before their personal information is transferred or becomes subject to
          different privacy practices.
          <br /> <br />
          AIRA sometimes partners with other companies in order to provide their
          services via a link on the Site, for example, job applications, social
          media links and live chat. In those circumstances, the third party
          partners will have access to the personal information you provide to
          them via their website, and we do not have any control over how they use
          that personal information. In order to fully understand how your
          personal information is used by our partners, please carefully review
          their applicable privacy policies. Except as set forth herein, AIRA does
          not share your personal information with any third parties.
          <br /> <br />
        </Typography>
        {/* Sharing of personal Info */}
        {/* Other Uses of Personal Information */}
        <Box sx={{ my: 2 }}>
          <Typography variant="body1" sx={{ lineHeight: 2, my: 2 }}>
            <b style={{ color: Colors.airaSecondary, fontSize: "20px" }}>
              Other Uses of Personal Information
            </b>
          </Typography>
          <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
            In addition to the uses described above, AIRA will inform individuals
            of any other intended uses of their personal information at the time
            such personal information is collected or before such use is
            implemented including disclosure to third parties.
          </Typography>
        </Box>
        {/* Other Uses of Personal Information */}
        {/* Data Security and Retention */}
        <Box sx={{ my: 2 }}>
          <Typography variant="body1" sx={{ lineHeight: 2, my: 1 }}>
            <b style={{ color: Colors.airaSecondary, fontSize: "20px" }}>
              Data Security and Retention
            </b>
          </Typography>
          <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
            AIRA uses reasonable methods to secure all personal information by a
            variety of methods, including restricting access to such personal
            information only to those people who have a legitimate need to know in
            order to discharge their job responsibilities on behalf of AIRA,
            securing access to the facility where the personal information is
            stored and the use of technology and physical controls to secure the
            personal information. AIRA is required to disclose personal
            information in response to lawful requests by public authorities
            including to meet national security or law enforcement requirements.
            If you have questions about the security of your personal information,
            please contact us as described below. <br /> <br />
            We may retain your personal information for as long as it is needed to
            fulfill the purposes described in this privacy policy, comply with our
            legal obligations, resolve disputes or enforce our agreements. Or, we
            will retain such personal information for so long as we have a lawful
            basis to process it, as set forth in this policy and with respect to
            (1) personal information processed by us in connection with our
            provision of support services, within 90 days after the associated
            help desk ticket is closed, and (2) all other personal information
            collected through use of our services, within 30 days after the
            termination of the applicable contract between you, your company or
            our customer and us.
          </Typography>
        </Box>
        {/* Data Security and Retention */}

        <Box sx={{ my: 2 }}>
          <Typography variant="body1" sx={{ lineHeight: 2, my: 1 }}>
            <b style={{ color: Colors.airaSecondary, fontSize: "20px" }}>
              Security of Personal Information by Third Parties
            </b>
          </Typography>
          <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
            AIRA will require that all third parties acting on behalf of AIRA, and
            to which personal information is provided, give AIRA adequate
            contractual assurances that they will safeguard all such personal
            information in a manner consistent with this policy.
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="body1" sx={{ lineHeight: 2, my: 1 }}>
            <b style={{ color: Colors.airaSecondary, fontSize: "20px" }}>
              Children under the Age of 16
            </b>
          </Typography>
          <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
            The Sites are not intended for children under the age of 16.
            Accordingly, we do not intend to collect personal information from
            anyone we know to be under 16 years of age.
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="body1" sx={{ lineHeight: 2, my: 1 }}>
            <b style={{ color: Colors.airaSecondary, fontSize: "20px" }}>
              Advertising and Newsletters
            </b>
          </Typography>
          <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
            We may from time to time allow certain third parties to display
            advertising on our Sites or to manage our advertising on other sites.
            These third-party partners may use cookies or similar technologies
            such as web beacons, script, and pixels in order to provide you
            advertising based upon your browsing activities and interests. If you
            would prefer to not receive personalized ads based on your browser or
            device usage, you may generally express your opt-out preference to no
            longer receive tailored advertisements. Please note that you will
            continue to see advertisements, but they will no longer be tailored to
            your interests.
            <br /> <br />
            We will use your personal information to send you email or
            newsletters, if you have signed-up to receive them. If you would like
            to discontinue receiving this information, you may update your email
            preferences by using the “unsubscribe” link found in emails we send to
            you, or at your member profile on our website, or by contacting us as
            described below. You may not opt-out of service-related
            communications, which are not promotional in nature. Please note that
            even if you opt out of receiving the foregoing emails, we may still
            send you a response to any “Contact Us” request as well as
            administrative, maintenance and operational emails (for example, in
            connection with a password reset request).
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="body1" sx={{ lineHeight: 2, my: 1 }}>
            <b style={{ color: Colors.airaSecondary, fontSize: "20px" }}>
              ACCESS TO YOUR PERSONAL INFORMATION
            </b>
          </Typography>
          <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
            Upon an individual’s request, AIRA will provide reasonable access to
            any personal information it has about that person. AIRA will also take
            reasonable steps to allow such individuals to correct, change, modify
            or delete any such personal information that is shown to be incorrect,
            inaccurate or incomplete. You may ask us to delete the personal
            information we hold about you, or cease processing such personal
            information, in certain circumstances. It may not be possible for us
            to delete or cease processing all of the personal information we hold
            about you where we have an ongoing relationship with you or where we
            have a legal basis to retain such personal information.
            <br /> <br />
            You may access, correct, or request deletion of your personal
            information by contacting us at privacy@aira.fr . We will respond to
            your request within a reasonable timeframe.
            <br /> <br />
            When we process personal information on the basis that you have
            consented to such processing, you have the right to withdraw your
            consent, or ask us to stop or restrict processing the personal
            information we have about you, at any time by contacting us using the
            contact information below. If you are in the European Union, you have
            the right to make a complaint at any time to the relevant data
            protection authority in your country. We encourage you to first reach
            out to us at privacy@aira.fr.
            <br /> <br />
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="body1" sx={{ lineHeight: 2, my: 1 }}>
            <b style={{ color: Colors.airaSecondary, fontSize: "20px" }}>
              Territories
            </b>
          </Typography>
          <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
            Personal information collected by AIRA may be stored and processed in
            your geographic region, in the United States or in other countries in
            which AIRA, or its service providers, maintain facilities or
            operations. If you are in the European Economic Area, it may be
            necessary for your personal information to be transferred to, and
            processed in, other countries including the United States. If we
            transfer your personal information outside of the European Economic
            Area we use a variety of legal mechanisms, which may include
            contractual terms, to protect your rights with respect to your
            personal information.
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="body1" sx={{ lineHeight: 2, my: 1 }}>
            <b style={{ color: Colors.airaSecondary, fontSize: "20px" }}>
              Tracking
            </b>
          </Typography>
          <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
            We do not track users over time and across third party websites to
            provide targeted advertising. Accordingly, we do not currently respond
            or take any action with respect to web browser “do not track” signals
            or other mechanisms that provide consumers the ability to exercise
            choice regarding the collection of personal information about an
            individual consumer’s online activities over time and across
            third-party web sites or online services.
            <br />
            <br />
            However, some of our service providers and advertisers may use cookies
            or other methods to gather information regarding your use of the Sites
            and may combine the information in these cookies with any personal
            information about you that they may have. The use of such tracking
            information by a third party is subject to its privacy policy.
            <br />
            <br />
            In certain situations, AIRA may be required to disclose personal data
            in response to lawful requests by public authorities, including to
            meet national security or law enforcement requirements.
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="body1" sx={{ lineHeight: 2, my: 1 }}>
            <b style={{ color: Colors.airaSecondary, fontSize: "20px" }}>
              Changes
            </b>
          </Typography>
          <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
            AIRA may amend or modify this policy from time to time. If we make any
            material changes we will notify you by email (sent to the e-mail
            address specified in your account) or by posting the amended or
            modified version on the website. This policy may also be changed, or
            limited, to comply with legal or regulatory requirements, or as
            otherwise allowed or required by law.
          </Typography>
        </Box>

        {/* Contact US */}
        <Box sx={{ my: 2 }}>
          <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
            <b style={{ color: Colors.airaSecondary, fontSize: "20px" }}>
              Contact Information
            </b>
          </Typography>
          <Typography variant="subtitle1" sx={{ lineHeight: 2, my: 1 }}>
            Questions or comments about this policy, or concerns or complaints
            about possible violations, should be sent to privacy@aira.fr
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default index