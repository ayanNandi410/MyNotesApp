exports.homepage = async (req,res) => {
    const locals = {
        title: 'Notes Home',
        description: 'Note taking App'
    }
    res.render('index',locals);
}