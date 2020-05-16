const ruleobj = {
    query: {
        page: {
            type: 'number',
            required: true,
        },
        size: {
            type: 'number',
            max: 100,
            min: 1,
            required: true,
        },
        sortBy: {
            type: 'string',
            default: 'createdAt',
            required: false,
        },
        sortOrder: {
            type: 'number',
            default: -1,
            required: false,
        },
        title: {
            type: 'string',
            required: false,
        },
        email: {
            type: 'string',
            required: false,
        },
        type: {
            type: 'string',
            required: false,
        },
        target: {
            type: 'string',
            required: false,
        },
        status: {
            type: 'string',
            required: false,
        },
        update: {
            type: 'string',
            required: false,
        },
        kind: {
            type: 'string',
            required: false,
        },
        area: {
            type: 'string',
            required: false,
        },
        year: {
            type: 'string',
            required: false,
        },
        tag: {
            type: 'string',
            required: false,
        },
        ping: {
            type: 'string',
            required: false,
        },
        source: {
            type: 'string',
            required: false,
        },
    },
    id: {
        id: {
            type: 'string',
            required: true,
        },
    },
    ids: {
        ids: {
            type: 'array',
            required: true,
        },
    },
    user: (force: boolean) => ({
        name: { type: 'string', required: force },
        password: { type: 'password', required: force },
        email: { type: 'email', required: force },
        level: { type: 'number', required: false },
        score: { type: 'number', required: false },
        avatar: { type: 'string', required: false },
        background: { type: 'string', required: false },
        introduce: { type: 'string', required: false },
        status: { type: 'string', required: force },
        money: { type: 'number', required: false },
        expired: { type: 'number', required: false },
    }),
    animate: (force: boolean) => ({
        title: { type: 'string', required: force },
        slug: { type: 'string', required: force },
        author: { type: 'string', required: force },
        status: { type: 'string', required: force },
        introduce: { type: 'string', required: false },
        staff: { type: 'string', required: false },
        actor: { type: 'string', required: false },
        firstPlay: { type: 'string', required: false },
        isUpdate: { type: 'boolean', required: false },
        updateDay: { type: 'number', required: false },
        updateTime: { type: 'number', required: false },
        rateStar: { type: 'number', required: false },
        rateCount: { type: 'number', required: false },
        impression: { type: 'string', required: false },
        eposideCount: { type: 'number', required: false },
        playType: { type: 'string', required: false },
        noPrefix: { type: 'boolean', required: false },
        level: { type: 'number', required: false },
        linkPrefix: { type: 'string', required: false },
        downTitle: { type: 'string', required: false },
        downLink: { type: 'string', required: false },
        season: { type: 'string', required: false },
        seasonRelate: { type: 'string', required: false },
        eposide: { type: 'array', required: false },
        coverVertical: { type: 'string', required: false },
        coverHorizontal: { type: 'string', required: false },
        area: { type: 'array', required: false },
        kind: { type: 'array', required: false },
        year: { type: 'array', required: false },
        tag: { type: 'array', required: false },
    }),
    comic: (force: boolean) => ({
        title: { type: 'string', required: force },
        slug: { type: 'string', required: force },
        author: { type: 'string', required: force },
        status: { type: 'string', required: force },
        introduce: { type: 'string', required: false },
        staff: { type: 'string', required: false },
        actor: { type: 'string', required: false },
        firstPlay: { type: 'string', required: false },
        isUpdate: { type: 'boolean', required: false },
        updateDay: { type: 'number', required: false },
        updateTime: { type: 'number', required: false },
        rateStar: { type: 'number', required: false },
        rateCount: { type: 'number', required: false },
        impression: { type: 'string', required: false },
        eposideCount: { type: 'number', required: false },
        playType: { type: 'string', required: false },
        noPrefix: { type: 'boolean', required: false },
        level: { type: 'number', required: false },
        linkPrefix: { type: 'string', required: false },
        downTitle: { type: 'string', required: false },
        downLink: { type: 'string', required: false },
        season: { type: 'string', required: false },
        seasonRelate: { type: 'string', required: false },
        eposide: { type: 'array', required: false },
        coverVertical: { type: 'string', required: false },
        coverHorizontal: { type: 'string', required: false },
        area: { type: 'array', required: false },
        kind: { type: 'array', required: false },
        year: { type: 'array', required: false },
        tag: { type: 'array', required: false },
    }),
    config: {
        favcion: { type: 'string', default: '', required: false },
        name: { type: 'string', default: '', required: false },
        slogan: { type: 'string', default: '', required: false },
        information: { type: 'string', default: '', required: false },
        tongji: { type: 'string', default: '', required: false },
        color: { type: 'string', default: '', required: false },
        qq: { type: 'string', default: '', required: false },
        email: { type: 'string', default: '', required: false },
        app: { type: 'string', default: '', required: false },
        logo: { type: 'string', default: '', required: false },
        headimg: { type: 'string', default: '', required: false },
        mobleimg: { type: 'string', default: '', required: false },
        loginimg: { type: 'string', default: '', required: false },
        avatar: { type: 'string', default: '', required: false },
        background: { type: 'string', default: '', required: false },
        dplayer: { type: 'string', default: '', required: false },
        newAnimate: { type: 'string', default: '', required: false },
        newComic: { type: 'string', default: '', required: false },
        allAnimate: { type: 'string', default: '', required: false },
        allComic: { type: 'string', default: '', required: false },
        allPost: { type: 'string', default: '', required: false },
        pcMenu: { type: 'array', required: false },
        pcIndex: { type: 'array', required: false },
        animateMenu: { type: 'array', required: false },
        animateIndex: { type: 'array', required: false },
        comicMenu: { type: 'array', required: false },
        comicIndex: { type: 'array', required: false },
        postIndex: { type: 'array', required: false },
        h5Menu: { type: 'array', required: false },
        h5Index: { type: 'array', required: false },
        postMenu: { type: 'array', required: false },
        postTop: { type: 'array', required: false },
        message: { type: 'string', required: false },
        aboutus: { type: 'string', required: false },
        playLimit: { type: 'array', required: false },
        jiexi: { type: 'array', required: false },
        comicLimit: { type: 'array', required: false },
        emailType: { type: 'string', default: 'smtp', required: false },
        emailName: { type: 'string', default: '', required: false },
        emailSender: { type: 'string', default: '', required: false },
        smtpHost: { type: 'string', default: '', required: false },
        smtpPort: { type: 'number', default: 465, required: false },
        smtpSecure: { type: 'string', default: '', required: false },
        smtpUser: { type: 'string', default: '', required: false },
        smtpPass: { type: 'string', default: '', required: false },
        sendgrid: { type: 'string', default: '', required: false },
        commentVerify: { type: 'boolean', default: false, required: false },
        autoUpdate: { type: 'boolean', default: false },
        danmuAuth: { type: 'boolean', default: false, required: false },
        danmuVerify: { type: 'boolean', default: false, required: false },
        userVerify: { type: 'boolean', default: false, required: false },
        usePicInterface: { type: 'boolean', default: false, required: false },
        picInterface: { type: 'string', default: '', required: false },
        appversion: { type: 'string', default: '', required: false },
        updateLogs: { type: 'string', default: '', required: false },
        downLink: { type: 'string', default: '', required: false },
        qqAppLink: { type: 'string', default: '', required: false },
        qqWebLink: { type: 'string', default: '', required: false },
        qqNumber: { type: 'string', default: '', required: false },
    },
    danmu: (force: boolean) => ({
        target: { type: 'string', required: force },
        author: { type: 'string', required: false },
        time: { type: 'number', required: false },
        text: { type: 'string', required: force },
        color: { type: 'number', required: false },
        type: { type: 'number', required: false },
        ip: { type: 'string', required: false },
        referer: { type: 'string', required: false },
    }),
    shop: (force: boolean) => ({
        title: { type: 'string', required: force },
        status: { type: 'string', require: force },
        price: { type: 'number', required: force },
        upLevel: { type: 'number', required: false },
        addScore: { type: 'number', required: false },
        addExpired: { type: 'number', required: false },
        introduce: { type: 'string', required: false },
        cover: { type: 'string', required: false },
    }),
    report: (force: boolean) => ({
        author: { type: 'string', required: force },
        content: { type: 'string', required: force },
        target: { type: 'string', required: force },
        onModel: { type: 'string', required: force },
        status: { type: 'string', required: force },
    }),
    category: (force: boolean) => ({
        name: { type: 'string', required: force },
        type: { type: 'string', required: force },
        cover: { type: 'string', required: false },
        introduce: { type: 'string', required: false },
        show: { type: 'boolean', required: false },
    }),
    season: (force: boolean) => ({
        name: { type: 'string', required: force },
        type: { type: 'string', required: force },
        cover: { type: 'string', required: false },
        introduce: { type: 'string', required: false },
        impress: { type: 'string', required: false },
    }),
    comment: (force: boolean) => ({
        author: { type: 'string', required: force },
        target: { type: 'string', required: false },
        onModel: { type: 'string', required: false },
        replyTo: { type: 'string', required: false },
        parent: { type: 'string', required: false },
        content: { type: 'string', required: force },
    }),
    key: (force: boolean) => ({
        count: { type: 'number', required: force },
        price: { type: 'number', required: force },
        expired: { type: 'number', required: force },
    }),
    rate: (force: boolean) => ({
        author: { type: 'string', required: force },
        target: { type: 'string', required: force },
        onModel: { type: 'string', required: force },
        content: { type: 'string', required: false },
        rate: { type: 'number', required: force },
    }),
    post: (force: boolean) => ({
        title: { type: 'string', required: force },
        slug: { type: 'string', required: force },
        status: { type: 'string', required: force },
        level: { type: 'number', required: force },
        author: { type: 'string', required: force },
        kind: { type: 'array', required: false },
        tag: { type: 'array', required: false },
        cover: { type: 'string', required: false },
        introduce: { type: 'string', required: false },
        content: { type: 'string', required: false },
        season: { type: 'string', required: false },
        seasonRelate: { type: 'string', required: false },
    }),
    blog: (force: boolean) => ({
        content: { type: 'string', required: force },
        target: { type: 'string', required: false },
        onModel: { type: 'string', required: false },
        status: { type: 'string', required: force },
        author: { type: 'string', required: force },
        tag: { type: 'array', required: false },
        image: { type: 'array', required: false },
        video: { type: 'string', required: false },
        link: { type: 'string', required: false },
        hot: { type: 'number', required: false },
    }),
    login: {
        name: { type: 'string' },
        password: { type: 'string' },
    },
    register: {
        name: { type: 'string' },
        password: { type: 'string' },
        email: { type: 'string' },
    },
    eposide: {
        title: { type: 'string', required: false },
        cover: { type: 'string', required: false },
        sort: { type: 'number', required: false },
        target: { type: 'string', required: false },
        onModel: { type: 'string', required: false },
        link: { type: 'array', required: false },
        subtitle: { type: 'array', required: false },
        preview: { type: 'array', required: false },
        bilibili: { type: 'string', required: false },
        noSetPrefix: { type: 'boolean', required: false },
        noParentPrefix: { type: 'boolean', required: false },
    },
    cateQuery: {
        page: {
            type: 'number',
            required: true,
        },
        size: {
            type: 'number',
            min: 1,
            required: true,
        },
        sortBy: {
            type: 'string',
            default: 'updatedAt',
            required: false,
        },
        sortOrder: {
            type: 'number',
            default: -1,
            required: false,
        },
        title: {
            type: 'string',
            required: false,
        },
        type: {
            type: 'string',
            required: false,
        },
    },
    data: {
        target: {
            type: 'string',
            required: false,
        },
        type: {
            type: 'string',
            required: true,
        },
        author: {
            type: 'string',
            required: true,
        },
        time: {
            type: 'number',
            required: false,
        },
    },
    string: {
        string: {
            type: 'string',
            required: false,
        },
    },
    replace: {
        type: {
            type: 'string',
        },
        kind: {
            type: 'string',
        },
        before: {
            type: 'string',
        },
        after: {
            type: 'string',
        },
    },
    downimg: {
        type: {
            type: 'string',
        },
        kind: {
            type: 'string',
        },
        replace: {
            type: 'boolean',
        },
    },
    source: (force: boolean) => ({
        source: { type: 'string', required: force },
        api: { type: 'string', required: force },
        cat: { type: 'number', required: force },
        type: { type: 'string', required: force },
        update: { type: 'boolean', required: false },
        slugPrefix: { type: 'string', required: false },
        mode: { type: 'string', required: force },
    }),
    relation: {
        onModel: { type: 'string' },
        target: { type: 'string' },
        author: { type: 'string' },
    },
    userEdit: {
        name: { type: 'string', required: true },
        introduce: { type: 'string', required: false },
        avatar: { type: 'string', required: false },
        background: { type: 'string', required: false },
    },
};

const rules = (rule: string, force: boolean) => {
    if (typeof ruleobj[rule] === 'function') {
        return ruleobj[rule](force);
    } else {
        return ruleobj[rule];
    }
};

export default rules;
