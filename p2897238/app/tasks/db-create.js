import { db } from "../../../db.js"

db.exec(`
    DROP TABLE IF EXISTS article;
    DROP TABLE IF EXISTS section;
    DROP TABLE IF EXISTS news_article;
    DROP TABLE IF EXISTS news_section;

    CREATE TABLE article (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        idName TEXT NOT NULL,
        title TEXT NOT NULL,
        date TEXT NOT NULL,
        image TEXT NOT NULL,
        catagory TEXT NOT NULL,
        content TEXT NOT NULL
        );

        CREATE TABLE section (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        section_image TEXT NOT NULL,
        section_title TEXT NOT NULL,
        section_content TEXT NOT NULL,
        section_date TEXT NOT NULL
        );
    
        INSERT INTO article (idName, title, date, image, catagory, content) VALUES
            ('Football', 'Football Champions','2026-02-22','/assets/img/football.jpg','sports',
            'The university football team achieved a remarkable victory this season by winning the championship after 
            months of dedication and teamwork. Their strong defense and smart strategy secured success in the final 
            match, bringing pride to the entire campus. Students and faculty celebrated the achievement, marking it 
            as one of the most memorable sports moments of the year. The victory reflects the team’s discipline, unity, 
            and commitment to excellence.'),

            ('MUN', 'Model United Nations','2026-01-8','/assets/img/united.jpg','academic',
            'The university recently hosted its annual Model United Nations Conference, where students participated 
            in diplomatic debates and global discussions. Delegates represented different countries and addressed 
            international issues in a professional setting. The event encouraged public speaking, negotiation skills, 
            and critical thinking while creating an engaging academic atmosphere. The conference concluded with awards 
            for outstanding delegates, highlighting the university’s commitment to leadership and global 
            awareness.'),

            ('Robotics', 'Robotics Champions','2025-01-3','/assets/img/robotics2.jpg','technology',
            'The university robotics team secured first place in a major robotics competition after designing and 
            building an innovative robot capable of completing complex challenges with speed and precision. The team 
            demonstrated strong technical skills, creativity, and collaboration throughout the project. Their achievement 
            showcases the university’s excellence in science, technology, and innovation, proving that campus talent extends 
            beyond sports into advanced engineering and problem-solving.'),

            ('Art', 'Campus Art festival','2024-06-12','/assets/img/art.avif','art',
            'The Annual Campus Art Festival transformed the university into a vibrant creative space filled with 
            exhibitions, workshops, and live artistic performances. Students showcased their talents through paintings, 
            sculptures, digital artwork, and multimedia projects. The event encouraged collaboration between artists and 
            attracted large attendance from students and faculty. The festival highlighted the importance of creativity and 
            artistic expression within the university community.'),

            ('Audition', 'Hamlet Auditions','2024-04-14','/assets/img/audi.webp','art',
            'The university recently presented a remarkable performance of Hamlet, featuring students from various 
            departments. Actors delivered compelling portrayals of the characters, while the production crew enhanced the 
            play with creative staging, lighting, and music. Audiences of students, faculty, and visitors were captivated, 
            applauding the cast and celebrating the university’s thriving arts scene. The event highlighted both student 
            talent and the cultural vibrancy of campus life, leaving attendees inspired and excited for future theater 
            productions.'),

            ('Basketball', 'Basketball Champions', '2023-05-8','/assets/img/basketball.jpg','sports',
            'The university basketball team celebrated an impressive championship victory after demonstrating skill, 
            teamwork, and determination throughout the tournament. Their fast passes, accurate shooting, and resilience 
            under pressure secured success in the final game. Fans filled the stands and campus celebrations followed the 
            win. The achievement reflects the players’ dedication and highlights the university’s growing strength in 
            competitive sports.');

            INSERT INTO section (section_image, section_title, section_content, section_date) VALUES
            ('/assets/img/run.jpeg', 'Campus Marathon 5km', 'A fun and inclusive 5K marathon open to all students and staff.', '2026-04-02'),

            ('/assets/img/showCase.jpg', 'University Talent Showcase', 'A campus-wide talent showcase featuring drama, monologues, and creative
            performance.', '2026-05-20');

    CREATE TABLE news_article (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        news_id TEXT NOT NULL,
        news_title_1 TEXT NOT NULL,
        news_image TEXT NOT NULL,
        news_date TEXT NOT NULL,
        news_catagory TEXT NOT NULL,
        news_title_2 TEXT NOT NULL,
        news_content_1 TEXT NOT NULL,
        news_title_3 TEXT NOT NULL,
        news_content_2 TEXT NOT NULL,
        news_title_4 TEXT NOT NULL,
        news_content_3 TEXT NOT NULL,
        news_title_5 TEXT NOT NULL,
        news_content_4 TEXT NOT NULL,
        news_content_5 TEXT NOT NULL
        );

        CREATE TABLE news_section (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        news_section_id TEXT NOT NULL,
        news_section_content TEXT NOT NULL
        );

        INSERT INTO news_article (
        news_id,
        news_title_1, 
        news_image, 
        news_date, 
        news_catagory, 
        news_title_2, 
        news_content_1, 
        news_title_3, 
        news_content_2, 
        news_title_4, 
        news_content_3, 
        news_title_5,
        news_content_4, 
        news_content_5 
        ) VALUES
            ('football',
        'University Football Team Wins ChampionShip',
             '/assets/img/football.jpg',
              '2026-02-22',
              'sports',
               'Champions Victory', 
            'The university football team won the championship after an outstanding season filled with determination and teamwork. In the final match, their strong defense and smart strategy secured a well deserved victory.', 
            'Key Performance', 
            'Throughout the season, the team showed consistency and discipline. Despite facing tough opponents and a few injuries, the players remained focused and united.',
            'Team Leadership',
            'The team captain played a major role in leading the squad both on and off the field. His leadership helped strengthen team spirit and improve overall performance.', 
            'Campus Celebration',
            'The  University will host a Campus Celebration event next week on 20 Feb 2026 at 12PM. Students are encourged to attend and join the celebration.', 
            'Want to be the next Champion? Check the latest events and upcoming tryouts'),
            
            ('mun',
            'Model United Nations Conference',
            '/assets/img/united.jpg',
            '2026-01-08',
            'academic',
            'Model United Nations',
            'The university successfully hosted its annual Model United Nations (MUN) Conference, bringing together students from different departments to engage in diplomatic debate and global discussions.',
            'Academic Engagement',
            'Participants represented various countries and discussed international issues, developing their public speaking, negotiation, and critical thinking skills throughout the conference.',
            'Student Leadership',
            'The organizing committee ensured a well-structured and professional event. Student leaders managed sessions, guided debates, and created a realistic diplomatic atmosphere.',
            'Closing Ceremony',
            'The conference concluded with an awards ceremony recognizing outstanding delegates and best speakers. The event highlighted the university’s commitment to academic excellence and global awareness.',
            'Want to participate in the next conference? Check the latest events and registration details'),

            ('robotics',
            'Robotics Competetion Victory',
            '/assets/img/robotics.jpg',
            '2025-01-03',
            'technology',
            'Robotics Team Wins Major Competition',
            'The university robotics team won first place in a major robotics competition after designing and building an innovative robot that completed all challenges efficiently and accurately.',
            'Technical Excellence',
            'The robot demonstrated advanced programming, precise engineering, and creative problem-solving. The team carefully tested and improved their design before the final competition.',
            'Team Collaboration',
            'Strong teamwork and strategic planning played a key role in the victory. Each member contributed technical expertise to achieve the best possible performance.',
            'Innovation Celebration',
            'The university will host a Technology Showcase event next month to celebrate the team’s achievement and present the winning robot to students and faculty.',
            'Interested in robotics? Explore upcoming technology events and workshops'),

            ('art',
            'Univeristy Art Festival',
            '/assets/img/art.avif',
            '2024-06-012',
            'art',
            'Annual Campus Art Festival',
            'The university hosted its Annual Art Festival, showcasing student creativity through exhibitions, live performances, and interactive workshops.',
            'Creative Exhibitions',
            'Students presented paintings, sculptures, digital artwork, and multimedia projects, transforming the campus into a vibrant artistic space.',
            'Collaborate Workshops',
            'Art professors and guest artists conducted workshops encouraging students to experiment with new techniques and collaborate on creative projects.',
            'Community Celebration',
            'The event attracted students, faculty, and visitors who gathered to celebrate artistic expression and innovation across campus.',
            'Passionate about art? Discover upcoming creative events and exhibitions'),

            ('audition',
            'Hamlet Auditions Event',
            '/assets/img/audi.webp',
            '2024-04-14',
            'art',
            'University Theater Presents “Hamlet”',
            'The university theater department successfully staged a performance of Hamlet, showcasing the talents of students from across different majors. The production impressed audiences with its creative staging, compelling acting, and engaging storytelling.',
            'Student Performances',
            'Actors demonstrated strong stage presence, emotional depth, and coordination, making the classic play come alive. Supporting crew members contributed with lighting, set design, and music, enhancing the overall experience.',
            'Audience Reception',
            'The performance attracted students, faculty, and visitors who applauded the cast and celebrated the university’s vibrant cultural scene.',
            'Event Celebration',
            'After the final show, the theater department hosted a small reception to honor the performers and thank the audience for their support.',
            'Interested in more cultural events? Check the latest campus performances'),

            ('basketball',
            'Basketball Champions',
            '/assets/img/basketball2.webp',
            '2023-05-08',
            'sports',
            'Basketball Team Wins Championship',
            'The university basketball team won the tournament with skill, energy, and determination. In the final match, the players remained focused and secured a well-earned victory.',
            'Outstanding Teamwork',
            'Throughout the competition, the team demonstrated fast passes, strong defense, and accurate shooting. Their coordination and discipline were key to their success.',
            'Competitive Spirit',
            'Even when the score was close, the players stayed confident and never gave up, showing resilience under pressure.',
            'Campus Celebration',
            'Students gathered on campus to celebrate the victory, cheering for the team and recognizing their hard work and dedication.',
            'Want to join the team? Check the latest sports events and upcoming tryouts');


            INSERT INTO news_section (news_section_id, news_section_content) VALUES
            ('basketball', 'The basketball team won the basketball tournament with skill and energy.'),
            ('robotics', 'The university robotics team won a major robotics competition by designing and building an impressive robot.'),
            ('football', 'The university football team won the football tournament after a season full of hard work and practice.'),
            ('mun', 'The university successfully hosted its annual Model United Nations (MUN)'),
            ('audition', 'The university theater department successfully staged a performance of Hamlet, showcasing the talents'),
            ('art', 'The university hosted its Annual Art Festival, showcasing student creativity through exhibitions');

    `)
