
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

    getChangeText (newText){
        return this.text = newText;
    };
    getDecLikes (){
        return this.likes + 1;
    };
    gerIncLikes (){
        return this.likes - 1;
    }
};

try {
    const myPost = new Post ('1', 'New Year', 'Sasha', 'Marry Christmas and Happy New Year', new Date(), 58);
    console.log('myPost', myPost);
    console.log('new text:', myPost.getChangeText('new post about Marry Christmas and Happy New Year'));
    console.log(myPost.getDecLikes());
    console.log(myPost.gerIncLikes());
} catch (err) {
    console.log('error:', err);
};

