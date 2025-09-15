
class Post {
    constructor (id, title, author, text, dataWrite, likes ){
        this.id = id;
        this.title = title;
        this.author = author;
        this.text = text;
        this.dataWrite = dataWrite;
        this.likes = likes;
    }
    set likes(value){
        if (typeof value !== 'number') {
            throw new TypeError('likes must be number'); 
        }
        if (value < 0 || value > 100) {
            throw new RangeError('likes must be between 0 and 100');
        }
        this._likes = value; 
    };

    get likes(){
        return this._likes
    };

    changeText (newText){
        return this.text = newText;
    };
    decLikes (){
        return --this.likes;
    };
    incLikes (){
        return ++this.likes;
    }
};

try {
    const myPost = new Post ('1', 'New Year', 'Sasha', 'Marry Christmas and Happy New Year', new Date(), 58);
    console.log('myPost', myPost);
    console.log('new text:', myPost.changeText('new post about Marry Christmas and Happy New Year'));
    console.log(myPost.decLikes());
    console.log(myPost.incLikes());
} catch (err) {
    console.log('error:', err);
};

