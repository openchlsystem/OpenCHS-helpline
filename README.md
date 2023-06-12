
# OpenCHS  

## The Child Helpline Case Management

Our project aims to provide a comprehensive solution for helplines in East Africa, specifically addressing the critical issue of Violence Against Children (VAC) and Gender-Based Violence (GBV). By utilizing our system, helplines can efficiently collect, store, and analyze data related to these pressing societal concerns.

With our system, helplines can effectively track and document incidents of violence, ensuring that crucial information is securely stored and easily accessible. By centralizing and organizing this data, our system enables helplines to gain valuable insights into the prevalence, patterns, and trends of VAC and GBV in the region.

Through advanced data analysis techniques, our system empowers helplines to identify key risk factors, inform evidence-based interventions, and ultimately contribute to more targeted and impactful efforts in combating violence against children and gender-based violence. By offering a comprehensive and user-friendly platform, our project aims to strengthen the capacity of helplines in East Africa and enhance their ability to protect and support vulnerable individuals.

Overall, our project serves as a vital tool in the fight against Violence Against Children and Gender-Based Violence, empowering helplines in East Africa to make informed decisions, drive positive change, and ultimately work towards creating safer and more inclusive communities.

## Table of Contents

- Installation
- Usage
- Features
- Documentation
- Contributing
- License
- Credits
- Support
- Roadmap
- Changelog
- Frequently Asked Questions (FAQ)
- References
- Related Projects
- Authors

## Installation

4. Installation:

   - **Centos**: Follow the installation guide for CentOS by [linking to the CentOS installation readme](https://github.com/openchlsystem/OpenCHS-helpline/blob/main/03_Deployment/01_Centos/README.md).
   - **Nginx**: Install Nginx by referring to the [Nginx installation readme](https://github.com/openchlsystem/OpenCHS-helpline/blob/main/03_Deployment/04_NGINX/README.md).
   - **PHP**: Set up PHP by following the instructions in the [PHP installation readme](https://github.com/openchlsystem/OpenCHS-helpline/blob/main/03_Deployment/05_PHP/README.md).
   - **JavaScript**: No specific installation steps are required for JavaScript as it is a client-side language.
   - **Asterisk**: Install and configure Asterisk by referring to the [Asterisk installation readme](https://github.com/openchlsystem/OpenCHS-helpline/blob/main/03_Deployment/06_ASTERISK/README.md).
   - **MySQL**: Set up MySQL by following the instructions in the [MySQL installation readme](https://github.com/openchlsystem/OpenCHS-helpline/blob/main/03_Deployment/03_Mysql/README.md).

   Once all the necessary components are installed, you can proceed with the application setup:

   - Clone the application repository from

      - Step 1: Clone the repository
         ```git clone <repository_url>```

      - Step 2: Enable sparse checkout
         ```cd <repository_directory>```

         ```git sparse-checkout init```

      - Step 3: Specify the "src" folder to include
            ```git sparse-checkout set src```

      - Step 4: Update your working directory
            ```git pull```

   <!-- -  to your local machine. -->
   - Configure the Nginx server to point to the application's root directory.
   - Import the MySQL database schema provided in the repository.
   - Update the necessary configuration files (if any) to reflect your environment settings.
   - Start the Asterisk server and configure it to work with the application.
   - Launch the application by running the appropriate commands or accessing it through the Nginx server.

   Additional instructions or dependencies specific to your application may be mentioned in the repository's README or installation guide. Be sure to refer to those for a complete and accurate installation process.

   For any further assistance or troubleshooting, please refer to the Support section or contact the project maintainers listed in the Authors section.

## Usage

## Features

6. Features:

   Our project offers a range of features to support helplines in East Africa in addressing violence against children (VAC) and gender-based violence (GBV). These features include:

   - **Contact Center & Call Management**: Efficiently manage incoming calls, track call details, and ensure prompt response and resolution for reported cases of VAC and GBV. The system provides a centralized platform for helplines to handle and monitor calls effectively.

   - **Case Management**: Seamlessly capture, organize, and manage case information related to VAC and GBV. Our system enables helplines to create, update, and track cases, ensuring a comprehensive view of each case's status, history, and associated actions.

   - **Quality Assurance**: Implement quality assurance measures to maintain high service standards and adherence to established protocols. The system supports monitoring and evaluation processes, enabling helplines to ensure consistent and effective support for victims of violence.

   - **Pivot Reports and Dashboards**: Generate insightful reports and visual dashboards to analyze trends, identify patterns, and gain actionable insights into VAC and GBV data. The system offers flexible reporting capabilities, allowing helplines to customize and drill down into the data based on their specific needs.

   - **Customization**: Tailor the system to meet the unique requirements and workflows of different helplines. Our project provides customization options, allowing helplines to configure the system according to their specific operational processes, data collection needs, and reporting preferences.

   - **3rd Party Integrations**: Seamlessly integrate with other child protection systems and tools, including the [Mental Health and Psychosocial Support (MHPSS)](https://emergency.unhcr.org/emergency-assistance/health-and-nutrition/mental-health-and-psychosocial-support) platform. Our system facilitates data sharing, collaboration, and interoperability, enabling helplines to connect with relevant stakeholders and leverage existing resources more effectively.

   These features collectively empower helplines in East Africa to streamline their operations, enhance data-driven decision-making, and improve their response to cases of violence against children and gender-based violence. The integration with other child protection systems further strengthens the collaboration and holistic approach in addressing the well-being of children and victims.

   For detailed instructions on how to utilize each feature, please refer to the Documentation section. Contributions to further enhance or customize these features are welcome as outlined in the Contributing section.

   Feel free to explore and leverage these features, including the 3rd party integrations, to effectively manage and address incidents of violence in your region.

Remember to provide any additional relevant details or instructions specific to your project's features and integrations in the README.

## Documentation

7. Additional Resources:

   In addition to the project's documentation and features, we provide several additional resources to support your usage and understanding of the system:

   - **User Manual**: Our comprehensive user manual provides detailed instructions on how to navigate the system, utilize its features, and perform various tasks. Access the user manual [here](https://github.com/openchlsystem/OpenCHS-helpline/tree/main/05_Training) to gain a deeper understanding of the system's functionalities and maximize its potential.

   - **API Documentation for MHPPS Integration**: If you're looking to integrate our system with the Mental Health and Psychosocial Support (MHPPS) platform, we have dedicated API documentation available. This documentation outlines the endpoints, request/response formats, authentication methods, and data exchange procedures for seamless integration. Explore the API documentation [here](https://documenter.getpostman.com/view/21578213/2s83zdvkcH) to facilitate the integration process.

   - **Presentation Slides**: To further understand the project's scope, features, and potential impact, we have prepared presentation slides that provide an overview of the system and its capabilities. Review the presentation slides [here](https://github.com/openchlsystem/OpenCHS-helpline/blob/main/05_Training/OPENCHS-PITCHDECK.mp4) to gain insights and share the information with relevant stakeholders.

   These additional resources will complement the project's documentation and assist you in effectively utilizing the system, integrating with MHPPS, and conveying its value to others.

   For any further questions or support, please refer to the Support section or contact the project maintainers listed in the Authors section.

## Contributing

   We welcome contributions to enhance and improve our project. Whether you're a developer, designer, or a domain expert, you can contribute in various ways. To ensure a smooth and collaborative process, please follow these guidelines when contributing to our project:

- **Fork the repository**: Start by forking the project repository to your GitHub account. This will create a copy of the project that you can freely modify.

- **Branching strategy**: Create a new branch for your contributions. It's recommended to use a descriptive name that reflects the purpose of your changes or feature.

- **Coding standards**: Adhere to our coding standards and best practices. Maintain consistent code formatting, ensure proper documentation, and follow any specific guidelines mentioned in the repository.

- **Committing changes**: Make atomic commits that capture logical units of work. Provide clear and concise commit messages that describe the changes made.

- **Pull requests**: When you're ready to contribute your changes, submit a pull request from your branch to the main repository's `main` branch. Include a detailed description of the changes and any relevant context.

- **Issue tracking**: If you encounter any issues or have ideas for improvements, feel free to open an issue on our GitHub repository. Provide a clear title, description, and, if possible, steps to reproduce the issue.

- **Code review**: We value collaboration and constructive feedback. Be open to code reviews and address any comments or suggestions provided by the project maintainers or other contributors.

   By following these contribution guidelines, we can maintain a high-quality project and foster a vibrant and inclusive community. We appreciate your contributions and look forward to working with you.

   For more information, please refer to our full contribution guide [here](https://example.com/contribution-guide).

   If you have any questions or need further assistance, please refer to the Support section or contact the project maintainers listed in the Authors section.

## License

   Our project is released under the GNU General Public License v3.0 (GPL-3.0), which is a widely used open-source license. This license grants you certain rights to use, modify, and distribute the software, while also ensuring that these rights are preserved for others who use or modify the software.

   The GNU General Public License v3.0 (GPL-3.0) is designed to promote the principles of software freedom and collaboration. It ensures that the source code of the project remains open and accessible, allowing anyone to study, modify, and distribute it. The license also includes provisions to protect users' freedoms and ensure that any modified versions of the software are also made available under the same license terms.

   For a detailed understanding of the rights and obligations granted by the GNU General Public License v3.0 (GPL-3.0), please refer to the full license text available [here](https://github.com/openchlsystem/OpenCHS-helpline/blob/main/LICENSE).

   By using or contributing to our project, you agree to be bound by the terms and conditions of the GNU General Public License v3.0 (GPL-3.0). We encourage you to read and understand the license to ensure compliance with its requirements.

   If you have any questions or need clarification regarding the license or its implications, please reach out to the project maintainers listed in the Authors section.

   Please note that this is a brief description of the GNU General Public License v3.0 (GPL-3.0) and its relevance to our project. It is not intended as legal advice, and we recommend consulting the full license text for complete and accurate information.

## Acknowledgements

- [UNICEF](https://www.unicef.org/)
- [UNFPA]((https://www.unfpa.org/))
- [ChildLine Kenya](https://childlinekenya.co.ke)
- [Sauti Uganda](https://sauti.mglsd.go.ug/sauti/)
- [Sema Tanzania](https://www.sematanzania.org/child-helpline)
- Child Helpline Lesotho

   We would like to express our gratitude to the following open-source projects and libraries that have contributed to the success of our system:

  - [SIP.js](https://sipjs.com/): SIP.js is a powerful JavaScript library that provides a simple and intuitive way to implement Session Initiation Protocol (SIP) communication in web applications. It has been instrumental in enabling voice communication features within our system.

  - [Chart.js](https://www.chartjs.org/): Chart.js is a versatile JavaScript library for creating interactive and visually appealing charts and graphs. It has greatly facilitated the implementation of data visualization features in our system, enabling users to gain valuable insights from their data.

  - [SimpleXLSXGen](https://github.com/shuchkin/simplexlsxgen): SimpleXLSXGen is a lightweight PHP library for generating Excel files. We have leveraged this library to provide support for exporting and importing data in Excel format, enhancing the data management capabilities of our system.

   We extend our appreciation to the developers and contributors of these projects for their hard work, dedication, and the open-source spirit that powers their creations. Without their valuable contributions, our system would not have been as feature-rich and efficient as it is.

   We also want to acknowledge the broader open-source community for their continuous support and inspiration. The collaborative nature of open source has played a significant role in shaping and advancing our project.

   If you find our system useful, we encourage you to explore and contribute to these projects as well, helping to foster the growth and improvement of the open-source ecosystem.

   Please note that the mentioned projects and libraries may have their own licenses and terms of use. We recommend reviewing their respective documentation for more information.

   If you have any questions or need further information regarding the acknowledgments or the usage of these projects in our system, please refer to the Support section or contact the project maintainers listed in the Authors section.

## Support

   For any questions, issues, or assistance related to our system, please feel free to reach out to our support team. You can contact us via email at [support@bitz-itc.com](mailto:support@bitz-itc.com).

   Additionally, you can visit our [Support Page](https://example.com/support) for more information, FAQs, and resources to help you with common inquiries and troubleshooting.

   Our support team is dedicated to providing timely and helpful responses to ensure a smooth experience with our system. We value your feedback and are committed to addressing any concerns you may have.

   Please provide detailed information about the issue or question you have, including any relevant logs, error messages, or steps to reproduce the problem. This will enable us to assist you more effectively and efficiently.

   We strive to continuously improve our system based on user feedback, so if you encounter any bugs or have suggestions for enhancements, please don't hesitate to contact us. Your input is valuable in helping us deliver a better user experience.

   We appreciate your interest in our system and look forward to assisting you. Our support team will make every effort to respond to your inquiries as soon as possible.

   Please note that our support hours are Monday to Friday, 9 AM to 5 PM (UTC).

   If you prefer to report issues or contribute to our project through GitHub, you can do so by visiting our [GitHub Issues](https://github.com/openchlsystem/OpenCHS-helpline/issues) page.

   Thank you for choosing our system and allowing us to be of service to you!

## Roadmap

   Our project roadmap outlines the key milestones and planned features for the future development of our system. It aims to address various aspects, including shift management, business intelligence, and the implementation of an open API. The roadmap is subject to change based on user feedback and evolving requirements. Here are the major milestones:

- **Phase 1: Foundation and Core Functionality**
  - Develop the core functionality of the system, including helpline call management, case management, and data collection for violence against children and gender-based violence.
  - Implement shift management features to efficiently manage helpline staff schedules and ensure continuous coverage.
  - Establish a secure and scalable infrastructure to support the system's growth.

- **Phase 2: Enhancing User Experience and Business Intelligence**
  - Improve the user experience by incorporating user feedback and conducting usability testing.
  - Enhance the reporting capabilities to provide comprehensive business intelligence insights, enabling data-driven decision-making.
  - Implement advanced analytics features to identify trends, patterns, and key performance indicators.

- **Phase 3: Integration and Interoperability**
  - Develop an open API that enables seamless integration with other child protection systems, including the MHHPS, to promote data sharing and collaboration.
  - Explore integration possibilities with third-party systems and services to extend the functionality and value of our system.
  - Ensure compatibility and compliance with relevant data protection and privacy regulations.

- **Phase 4: Customization and Scalability**
  - Provide customization options to cater to specific organizational requirements and workflows.
  - Scale the system to handle increased user load and growing data volumes while maintaining optimal performance.
  - Continuously optimize and fine-tune the system based on user feedback and emerging technologies.

- **Phase 5: Community Engagement and Continuous Improvement**
  - Foster an active user community by organizing webinars, conferences, and knowledge sharing sessions.
  - Regularly update the system with new features, bug fixes, and security enhancements based on user feedback and emerging industry standards.
  - Collaborate with stakeholders, partners, and the open-source community to drive innovation and address evolving needs in the child protection domain.

   Please note that this roadmap is a high-level overview and may be subject to adjustments based on changing priorities, emerging technologies, and user feedback. We are committed to delivering a robust, user-friendly, and impactful system that contributes to the well-being and safety of vulnerable children and victims of gender-based violence.

   For more detailed updates and specific feature timelines, please refer to our [Roadmap Page](https://example.com/roadmap) on our project website.

## Change Log

   The change logs for our project are maintained separately. Please refer to the [Change Log Page](https://example.com/changelog) for a detailed history of changes, updates, and bug fixes made to the system.

## Frequently Asked Questions (FAQs)

   1. **Q: How can I get started with the system?**
      - A: To get started with the system, please refer to our [User Manual](https://example.com/user-manual) for detailed instructions on installation, setup, and usage.

   2. **Q: Is technical support available for the system?**
      - A: Yes, we provide technical support for our system. You can reach out to our support team by emailing [support@bitz-itc.com](mailto:support@bitz-itc.com) or visiting our [Support Page](https://example.com/support) for assistance.

   3. **Q: Can I customize the system to fit my organization's requirements?**
      - A: Yes, the system allows for customization. Please refer to the [Customization Guide](https://example.com/customization-guide) for instructions on modifying and adapting the system to meet your specific needs.

   4. **Q: Is there a limit on the number of users or data that the system can handle?**
      - A: The system is designed to be scalable and can handle a large number of users and data. However, specific limits may depend on factors such as server capacity and system configuration.

   5. **Q: Are there any licensing or usage restrictions for the system?**
      - A: Our system is released under the [GNU General Public License v3.0](https://github.com/openchlsystem/OpenCHS-helpline/blob/main/LICENSE). Please review the license terms for details on usage, redistribution, and any associated obligations.

   6. **Q: Can I integrate the system with other software or systems we use in our organization?**
      - A: Yes, the system provides an open API that allows for integration with other software and systems. Please refer to the [API Documentation](https://example.com/api-docs) for more information on integration possibilities and available endpoints.

   7. **Q: How often is the system updated?**
      - A: We strive to provide regular updates and improvements to the system. Updates may include bug fixes, feature enhancements, and security patches. Please refer to our [Change Log Page](https://example.com/changelog) for a detailed history of changes.

   8. **Q: Can I contribute to the development of the project?**
      - A: Yes, we welcome contributions from the community. Please refer to the [Contributing Guidelines](https://example.com/contributing) for information on how to contribute, guidelines, and the process for submitting pull requests.

   9. **Q: What browsers are supported by the system?**
      - A: The system is compatible with modern web browsers such as Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge. Please ensure that you are using the latest version of your preferred browser for optimal performance.

   10. **Q: How can I report bugs or suggest new features for the system?**
       - A: You can report bugs, provide feedback, and suggest new features by creating issues on our [GitHub Issues](https://github.com/openchlsystem/OpenCHS-helpline/issues) page. Please provide as much detail as possible to help us understand and address the issue effectively.

   These are some of the frequently asked questions about our system. If you have any additional questions or need further assistance, please don't hesitate to contact our support team or refer to the relevant documentation.
