let videos = [
    {
        title: "First Video",
        rating: 5,
        comments: 3,
        createdAt: "2 minutes ago",
        views: 59,
        id: 1,
    },
    {
        title: "Second Video",
        rating: 5,
        comments: 3,
        createdAt: "2 minutes ago",
        views: 59,
        id: 2,
    },
    {
        title: "Third Video",
        rating: 5,
        comments: 3,
        createdAt: "2 minutes ago",
        views: 59,
        id: 3,
    },

];

export const tranding = (req, res) => {
    return res.render("home", { pageTitle: "Home", videos });
}
export const watch = (req, res) => {
    const { id } = req.params; // same thing > const id = req.params.id;
    const video = videos[id - 1];
    return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};

export const getEdit = (req, res) => {
    const { id } = req.params; // same thing > const id = req.params.id;
    const video = videos[id - 1];
    return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body; // const title = req.body.title;
    videos[id - 1].title = title;
    return res.redirect(`/videos/${id}`);
}

