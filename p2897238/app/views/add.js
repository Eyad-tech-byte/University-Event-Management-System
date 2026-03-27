import { escape } from "@std/html/entities";

export function addView({short, long, similar, error}){
    const short_news = short.map(short_article => `
        <article class="add-news"> 
            <div class="add-tittle">
                <strong>${escape(short_article.short_article_title)}</strong>
                <time datetime="${short_article.short_article_date}"> ${short_article.short_article_date}</time>
            </div>

            <figure class="add-img">
                    <img src="${short_article.short_article_image}" alt="${escape(short_article.short_article_title)}" width="300" height="200">
                    ${escape(short_article.short_article_content)}
                    <ins> view more...</ins><br>
            </figure>

            <span><ins>#${short_article.short_article_catagory}</ins></span>
            <hr>
        </article>
        `).join("\n");

    const long_news = long.map(long_article => `
        <article class="add-news-items">
            <h1>${escape(long_article.long_article_title_1)}</h1>

            <figure class="add-news-img">
                <img src="${long_article.long_article_image}" alt="${escape(long_article.long_article_title_2)}" width="400" height="450">
            </figure>
            
            <div class="add-time">
                <time datetime="${long_article.long_article_date}"> ${long_article.long_article_date} </time>  
                <span>#${long_article.long_article_catagory}</span>
            </div>

            <h3>${escape(long_article.long_article_title_2)}</h3>
            <p>${escape(long_article.long_article_content_1)}</p>
            <br>
            
            <div class="add-both">
                <div>
                    <h3>${escape(long_article.long_article_title_3)}</h3>
                    <p>${escape(long_article.long_article_content_2)}</p>
                </div>
                <div>
                    <h3>${escape(long_article.long_article_title_4)}</h3>
                    <p>${escape(long_article.long_article_content_3)}</p>
                </div>
            </div>
            <br>

            <h3>${escape(long_article.long_article_title_5)}</h3>
            <p>${escape(long_article.long_article_content_4)}</p>
            
            <p>${escape(long_article.long_article_content_5)} <a href="/"><ins>here</ins></a></p>
        </article>
        `).join("\n");
        
        const similar_news = similar.map(similar_article => ` 
            <aside class="add-similar">
                <a href="/news/news-${similar_article.similar_article_target}-event">
                    <span>${similar_article.similar_article_content}<ins>view more...</ins></span>
                </a>
                <hr>
            </aside>
        `).join("\n");

        const errorMessage = error ? `<p class="error">${escape(error)}</p>` : '';
    
    return `
     <main class="add-form">
        <h2>Add News</h2>
        <section class="add-news-page">
            ${short_news}
            <P>The first step you need to add a main paragraph and an img so the reader can quickly understand what the event is about like this: </P>
        </section>

        <form method="POST" enctype="multipart/form-data" autocomplete="off">
            <fieldset class="small-info">
                <legend>Short Information:</legend>
                <div class="short-info">
            
                    <div class="general-info">
                        <div class="title">
                            <label for="title">Title:</label>
                            <input type="text" id="title" name="short_title" required>
                        </div>

                        <div>
                            <label for="add-date">Date:</label>
                            <input type="date" id="add-date" name="short_date" required>
                        </div>
                    
                        <div>
                            <label for="catagory">catagory:</label>
                            <select id="catagory" name="short_catagory" required>
                                <option value="sports">Sports</option>
                                <option value="art">Art</option>
                                <option value="technology">Technology</option>
                                <option value="academic">Academic</option>
                            </select>
                        </div> 

                        <div>
                            <label for="img">img: </label>
                            <input id="img" name="short_image" type="file" accept="image/*" required>
                        </div>

                        <div>
                            <label for="idName">ID-Name:</label>
                            <input type="text" id="idName" name="short_idName" required>
                            ${errorMessage}
                        </div>
                    </div>
            
            
                    <div class="short-parag">
                        <div>
                            <label for="paragraph">write your paragraph here:</label><br>
                            <textarea id="paragraph" name="short_paragraph" placeholder="Type your first paragraph..." required></textarea>
                        </div>
                    </div>
            </fieldset>
               
            <div class="long">
            <section class="add-long-page">
                ${long_news}
            </section> 
            <fieldset>
                <legend>Long Information:</legend>
                
                    <label for="title_1">Title:</label>
                    <input type="text" id="title_1" name="long_title" required><br><br>

                    <div class="file">
                        <label for="img_1">img: </label>
                        <input id="img_1" name="long_image" type="file" accept="image/*" required><br><br>
                    </div>
                    <hr>

                    <label for="title_2">Header:</label>
                    <input type="text" id="title_2" name="long_header" required><br><br>
                    <label for="paragraph_1">write your paragraph here:</label>
                    <textarea id="paragraph_1" name="long_paragraph"  placeholder="Type your paragraph..." required></textarea><br><br>
                    <hr>

                    <label for="title_3">Header 2:</label>
                    <input type="text" id="title_3" name="long_header_2"  required><br><br>
                    <label for="paragraph_2">write your paragraph here:</label>
                    <textarea id="paragraph_2" name="long_paragraph_2" placeholder="Type your paragraph..." required></textarea><br><br>
                    <hr>

                    <label for="title_4">Header 3:</label>
                    <input type="text" id="title_4" name="long_header_3"  required><br><br>
                    <label for="paragraph_3">write your paragraph here:</label>
                    <textarea id="paragraph_3" name="long_paragraph_3" placeholder="Type your paragraph..." required></textarea><br><br>
                    <hr>

                    <label for="title_5">Header 4:</label>
                    <input type="text" id="title_5" name="long_header_4"  required><br><br>
                    <label for="paragraph_4">write your paragraph here:</label>
                    <textarea id="paragraph_4" name="long_paragraph_4" placeholder="Type your paragraph..." required></textarea><br><br>
                    
                    <label for="paragraph_5">write your paragraph here:</label>
                    <textarea id="paragraph_5" name="long_paragraph_5" placeholder="Type your paragraph..." required></textarea><br><br>
                
            </fieldset>
            </div>
        
            <div class="options">
                <section class="choose-similar">
                    <h2>similar things:</h2>
                    ${similar_news}
                </section>
                
                <div class="similar-options">
                    <label>choose from the other event news the news that you see they are similar to you topic:</label><br>

                    <input type="checkbox" id="football" name="similar_football" value="football">
                    <label for="football"><a href="/news/news-football-event" target="_blank">Football Champions</a></label><br>

                    <input type="checkbox" id="MUN" name="similar_MUN" value="MUN">
                    <label for="MUN"><a href="/news/news-mun-event" target="_blank"> Model United Nations</a></label><br>

                    <input type="checkbox" id="robotics" name="similar_robotics" value="robotics">
                    <label for="robotics"><a href="/news/news-robotics-event" target="_blank"> Robotics Champions</a></label><br>

                    <input type="checkbox" id="art" name="similar_art" value="art">
                    <label for="art"><a href="/news/news-art-event" target="_blank">Campus Art Festival</a></label><br>

                    <input type="checkbox" id="Auditions" name="similar_Auditions" value="Auditions">
                    <label for="Auditions"><a href="/news/news-audition-event" target="_blank">Hamlet Auditions</a></label><br>

                    <input type="checkbox" id="Basketball" name="similar_Basketball" value="Basketball">
                    <label for="Basketball"><a href="/news/news-basketball-event" target="_blank">Basketball Champions</a></label><br><br>

                </div>
            </div> 

            <div class="end">
                <input type="submit" value="submit">
                <input type="reset" value="reset">
            </div>

        </form>
    </main>
    `
}
