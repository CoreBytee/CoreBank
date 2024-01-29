return { InfoVersion = 1, -- Dont touch this

    ID = "CoreBank", -- A unique id 
    Name = "CoreBank",
    Description = "CoreBank",
    Version = "1.0.0",

    Author = {
        Developers = {
            "CoreByte"
        },
        Contributors = {}
    },

    Dependencies = {
        Luvit = {
            -- Luvit dependencies ("username/projectname")
        },
        Git = {},
        Dua = {}
    },

    Contact = {
        Website = "https://banking.corebyte.ga",
        Source = "https://github.com/CoreBytee/CoreBank",
        Socials = {}
    },

    Entrypoints = {
        Main = "ga.corebyte.Banking"
    }

}
