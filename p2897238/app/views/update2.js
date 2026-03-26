export function updateSecondView({first, second}){
    const first_news = first.map(article => `
        <article class="add-news">
            <div class="add-tittle"> 
                <strong>${article.title}</strong>
                <time datetime="${article.date}"> ${article.date}</time>
            </div>
            <figure class="add-img">
                <img src="/file/${article.idName}" alt="${article.title}" width="300" height="200">
                ${article.content}
                <ins> view more...</ins><br>
            </figure>
            
            <hr>
        </article>
        <P>The first step you need to update the main paragraph and update the img so the reader can quickly understand what the event is about like this: </P>
        </section>
        <form method="POST" enctype="multipart/form-data">
            <fieldset class="small-info">
                <legend>short Information:</legend>
                <div class="short-info">
                
                    <div class="general-info">
                        <div class="title">
                            <label for="update_title">Title:</label>
                            <input type="text" id="update_title" name="first_title" value="${article.title}" required><br><br>
                        </div>

                        <div>
                            <label for="update_date">Date:</label>
                            <input type="date" id="update_date" name="first_date" value="${article.date}" required><br><br>
                        </div>

                        <div>
                            <label for="update_idName">ID-Name:</label>
                            <input type="text" id="update_idName" name="first_idName" value="${article.idName}" readonly required><br><br>
                        </div>
                    </div>

                    <div class="short-parag">
                        <div>
                            <label for="update_paragraph">write your paragraph here:</label><br>
                            <textarea id="update_paragraph" name="first_paragraph" required>${article.content}</textarea>
                        </div>
                    </div>
            </fieldset>
        `).join("\n");

        const second_news = second.map(news_article => `
            <article class="add-news-items">   
                <h1>${news_article.news_title_1}</h1>

                <figure class="add-news-img">
                    <img src="/file/${news_article.news_id}" alt=${news_article.news_title_2} width="400" height="450">
                </figure>

                <div class="add-time">
                    <time datetime="${news_article.news_date}"> ${news_article.news_date} </time>  
                    <span>#${news_article.news_catagory}</span>
                </div>

                <h3>${news_article.news_title_2}</h3>
                <p>${news_article.news_content_1}</p>
                <br>
                
                <div class="add-both">
                    <div>
                        <h3>${news_article.news_title_3}</h3>
                        <p>${news_article.news_content_2}</p>
                    </div>
                    <div>
                        <h3>${news_article.news_title_4}</h3>
                        <p>${news_article.news_content_3}</p>
                    </div>
                </div>
                <br>

                <h3>${news_article.news_title_5}</h3>
                <p>${news_article.news_content_4}</p>
                    
                <p>${news_article.news_content_5} <a href="/"><ins>here</ins></a></p>
            </article>

            <fieldset class="long-info">
                <legend>Long Information:</legend>

                
                <label for="update_title_1">Title:</label>
                <input type="text" id="update_title_1" name="second_title" value="${news_article.news_title_1}" required><br><br>

                <label for="update_title_2">Header:</label>
                <input type="text" id="update_title_2" name="second_header" value="${news_article.news_title_2}" required><br><br>
                <label for="update_paragraph_1">write your paragraph here:</label>
                <textarea id="update_paragraph_1" name="second_paragraph" required>${news_article.news_content_1}</textarea><br><br>
                <hr>

                <label for="update_title_3">Header 2:</label>
                <input type="text" id="update_title_3" name="second_header_2" value="${news_article.news_title_3}" required><br><br>
                <label for="update_paragraph_2">write your paragraph here:</label>
                <textarea id="update_paragraph_2" name="second_paragraph_2" required>${news_article.news_content_2}</textarea><br><br>
                <hr>

                <label for="update_title_4">Header 3:</label>
                <input type="text" id="update_title_4" name="second_header_3" value="${news_article.news_title_4}" required><br><br>
                <label for="update_paragraph_3">write your paragraph here:</label>
                <textarea id="update_paragraph_3" name="second_paragraph_3" required>${news_article.news_content_3}</textarea><br><br>
                <hr>

                <label for="update_title_5">Header 4:</label>
                <input type="text" id="update_title_5" name="second_header_4" value="${news_article.news_title_5}" required><br><br>
                <label for="update_paragraph_4">write your paragraph here:</label>
                <textarea id="update_paragraph_4" name="second_paragraph_4" required>${news_article.news_content_4}</textarea><br><br>
                
                <label for="update_paragraph_5">write your paragraph here:</label>
                <textarea id="update_paragraph_5" name="second_paragraph_5" required>${news_article.news_content_5}</textarea><br><br>
            </fieldset>
        </div>
                
        `).join("\n");
    
    
    return `
    <main class="add-form">
        <h2>Update News</h2>
        <section class="add-news-page">
            ${first_news}
        
        <div class="long">
            <section class="add-long-page">
               ${second_news}
            </section>

            <div class="end">
                <input type="submit" value="submit">
                <input type="reset" value="reset">
            </div>
        </form>
    </main>
    `
}

