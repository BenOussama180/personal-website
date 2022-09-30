"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 67:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// NAMESPACE OBJECT: ./src/utils/bin/index.ts
var bin_namespaceObject = {};
__webpack_require__.r(bin_namespaceObject);
__webpack_require__.d(bin_namespaceObject, {
  "about": () => (bin_about),
  "banner": () => (banner),
  "date": () => (date),
  "echo": () => (echo),
  "emacs": () => (emacs),
  "email": () => (email),
  "github": () => (github),
  "gui": () => (gui),
  "help": () => (help),
  "instagram": () => (instagram),
  "linkedin": () => (linkedin),
  "projects": () => (projects),
  "sudo": () => (sudo),
  "vi": () => (vi),
  "vim": () => (vim),
  "weather": () => (weather),
  "whoami": () => (whoami)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./package.json
const package_namespaceObject = {"i8":"2.3.0"};
;// CONCATENATED MODULE: ./src/utils/bin/utils.ts


const help = async (args)=>{
    const commands = Object.keys(bin_namespaceObject).sort().join('\n');
    return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};
const echo = async (args)=>{
    return args.join(' ');
};
const whoami = async (args)=>{
    return 'guest';
};
const date = async (args)=>{
    return new Date().toString();
};
const gui = async (args)=>{
    window.open('/gui', '_self');
    return 'Opening GUI version...';
};
const email = async (args)=>{
    window.open('mailto:bou@sqr.ma');
    return 'Opening mailto:bou@sqr.ma...';
};
const vi = async (args)=>{
    return `why use vi? try 'emacs'.`;
};
const vim = async (args)=>{
    return `why use vim? try 'emacs'.`;
};
const emacs = async (args)=>{
    return `really? emacs? you should be using 'vim'`;
};
const sudo = async (args)=>{
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    return `Permission denied: unable to run the command '${args[0]}' as root.`;
};
/* export const repo = async (args?: string[]): Promise<string> => {
  window.open('', '_blank');

  return 'Opening repository...';
}; */ const banner = (args)=>{
    return `
██████████╗██     ██╗██████████╗ ██████████╗██╗  ██╗███╗   ███╗██╗  ██╗       
██      ██║██     ██║██════════╝ ██════════╝██║  ██║████╗ ████║██║  ██║
██      ██║██     ██║██          ██         ███████║██╔████╔██║███████║
██      ██║██     ██║██████████  ██████████ ╚════██║██║╚██╔╝██║╚════██║
██      ██║██     ██║ ╚═════╗██   ╚═════╗██      ██║██║ ╚═╝ ██║     ██║
██████████║█████████║       ║██         ║██      ██║██║ ╚═╝ ██║     ╚═╝
 ╚════════╝ ╚═══════╝██████████  ██████████      ╚═╝╚═╝     ╚═╝ 
                      ╚═════╝     ╚═════╝                               v${package_namespaceObject.i8}

Type 'help' to see list of available commands.

--
For a simplified version, click <a class="text-light-blue dark:text-dark-blue underline" href="/gui">Here</a>.
--
`;
};

;// CONCATENATED MODULE: ./config.json
const config_namespaceObject = JSON.parse('{"xs":{"CR":"r3eact","bW":"BenOussama180","kG":"oussamabendriss"}}');
;// CONCATENATED MODULE: ./src/utils/bin/social.ts

const instagram = async (args)=>{
    window.open(`https://www.instagram.com/${config_namespaceObject.xs.CR}/`);
    return 'Opening instagram...';
};
const github = async (args)=>{
    window.open(`https://github.com/${config_namespaceObject.xs.bW}/`);
    return 'Opening github...';
};
const linkedin = async (args)=>{
    window.open(`https://www.linkedin.com/in/${config_namespaceObject.xs.kG}/`);
    return 'Opening linkedin...';
};

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./src/api/index.ts


const getProjects = async ()=>{
    const { data  } = await external_axios_default().get(`https://api.github.com/users/${config_namespaceObject.xs.bW}/repos`);
    return data;
};
const getBio = async ()=>{
    const { data  } = await axios.get(config.bioUrl);
    return data;
};
const getWeather = async (city)=>{
    const { data  } = await external_axios_default().get(`/api/weather/${city}`);
    return data;
};
const getQuote = async ()=>{
    const { data  } = await external_axios_default().get('http://api.quotable.io/random');
    return {
        quote: `“${data.content}” — ${data.author}`
    };
};

;// CONCATENATED MODULE: ./src/utils/bin/weather.ts

const weather1 = async (args)=>{
    const city = args.join('+');
    if (!city) {
        return 'Usage: weather [city]. Example: weather casablanca';
    }
    const weather = await getWeather(city);
    return weather;
};
/* harmony default export */ const weather = (weather1);

;// CONCATENATED MODULE: ./src/utils/bin/about.ts
const about = async (args)=>{
    return `# $ whoami?  &nbsp;  
  I am Oussama, a full-stack software developer based in Kénitra, Morocco.
  I love building things.`;
};
/* harmony default export */ const bin_about = (about);

;// CONCATENATED MODULE: ./src/utils/bin/projects.ts

const projects1 = async (args)=>{
    const projects = await getProjects();
    return projects.filter((repo)=>!repo.fork
    ).map((repo)=>`${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`
    ).join('\n');
};
/* harmony default export */ const projects = (projects1);

;// CONCATENATED MODULE: ./src/utils/bin/index.ts






;// CONCATENATED MODULE: ./src/utils/commandExists.ts

const commandExists = (command)=>{
    const commands = Object.keys(bin_namespaceObject);
    return commands.indexOf(command.split(' ')[0]) !== -1;
};

;// CONCATENATED MODULE: ./src/utils/shell.ts


const shell = async (history, command, setHistory, clearHistory, setCommand)=>{
    const args = command.split(' ');
    if (command === 'clear') {
        clearHistory();
    } else if (command === '') {
        setHistory('');
    } else if (Object.keys(bin_namespaceObject).indexOf(args[0]) === -1) {
        setHistory(`shell: command not found: ${args[0]}. Try 'help' to get started.`);
    } else {
        const output = await bin_namespaceObject[args[0]](args.slice(1));
        setHistory(output);
    }
    setCommand('');
};

;// CONCATENATED MODULE: ./src/utils/tabCompletion.ts

const handleTabCompletion = (command, setCommand)=>{
    const commands = Object.keys(bin_namespaceObject).filter((entry)=>entry.startsWith(command)
    );
    if (commands.length === 1) {
        setCommand(commands[0]);
    }
};

;// CONCATENATED MODULE: ./src/components/ps1/Ps1.tsx


const Ps1 = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-light-yellow dark:text-dark-yellow",
                children: "guest"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-light-gray dark:text-dark-gray",
                children: "@"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-light-green dark:text-dark-green",
                children: "oussamaBendriss"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-light-gray dark:text-dark-gray",
                children: ":$ ~ "
            })
        ]
    }));
};
/* harmony default export */ const ps1_Ps1 = (Ps1);

;// CONCATENATED MODULE: ./src/components/ps1/index.tsx


;// CONCATENATED MODULE: ./src/components/input/Input.tsx






const Input = ({ inputRef , containerRef , command , history , setCommand , setHistory , clearHistory ,  })=>{
    const onSubmit = async (event)=>{
        if (event.key === 'c' && event.ctrlKey) {
            event.preventDefault();
            setCommand('');
            setHistory('');
        }
        if (event.key === 'l' && event.ctrlKey) {
            event.preventDefault();
            clearHistory();
        }
        if (event.key === 'Tab') {
            event.preventDefault();
            handleTabCompletion(command, setCommand);
        }
        if (event.key === 'Enter' || event.code === '13') {
            event.preventDefault();
            await shell(history, command, setHistory, clearHistory, setCommand);
            containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
        }
    };
    const onChange = ({ target: { value  }  })=>{
        setCommand(value);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row space-x-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "prompt",
                className: "flex-shrink",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ps1_Ps1, {
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                ref: inputRef,
                id: "prompt",
                type: "text",
                className: `bg-light-background dark:bg-dark-background focus:outline-none flex-grow ${commandExists(command) || command === '' ? 'text-dark-green' : 'text-dark-red'}`,
                value: command,
                onChange: onChange,
                autoFocus: true,
                onKeyDown: onSubmit
            })
        ]
    }));
};
/* harmony default export */ const input_Input = (Input);

;// CONCATENATED MODULE: ./src/components/input/index.tsx


;// CONCATENATED MODULE: ./src/hooks/history.ts

const useHistory = (defaultValue)=>{
    const [history, setHistory] = external_react_default().useState(defaultValue);
    const [command, setCommand] = external_react_default().useState('');
    return {
        history,
        command,
        setHistory: (value)=>setHistory([
                ...history,
                {
                    id: history.length,
                    date: new Date(),
                    command,
                    output: value
                }, 
            ])
        ,
        setCommand,
        clearHistory: ()=>setHistory([])
    };
};

;// CONCATENATED MODULE: ./src/components/history/History.tsx



const History = ({ history ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: history.map((entry, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row space-x-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex-shrink",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ps1_Ps1, {
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex-grow",
                                children: entry.command
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "whitespace-pre-wrap mb-2",
                        style: {
                            lineHeight: 'normal'
                        },
                        dangerouslySetInnerHTML: {
                            __html: entry.output
                        }
                    })
                ]
            }, entry.command + index)
        )
    }));
};
/* harmony default export */ const history_History = (History);

;// CONCATENATED MODULE: ./src/components/history/index.tsx


;// CONCATENATED MODULE: ./src/pages/index.tsx









const IndexPage = ({ version , quote ,  })=>{
    const inputRef = external_react_default().useRef(null);
    const containerRef = external_react_default().useRef(null);
    const { history , command , setCommand , setHistory , clearHistory  } = useHistory([]);
    const init = external_react_default().useCallback(()=>setHistory(banner())
    , []);
    external_react_default().useEffect(()=>{
        init();
    }, [
        init
    ]);
    external_react_default().useEffect(()=>{
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [
        history
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "OussamaBendriss | Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    ref: containerRef,
                    className: "overflow-y-auto h-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(history_History, {
                            history: history
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(input_Input, {
                            inputRef: inputRef,
                            containerRef: containerRef,
                            command: command,
                            history: history,
                            setCommand: setCommand,
                            setHistory: setHistory,
                            clearHistory: clearHistory
                        })
                    ]
                })
            })
        ]
    }));
};
async function getStaticProps(context) {
    const { quote  } = await getQuote();
    return {
        props: {
            version: package_namespaceObject.i8,
            quote
        },
        revalidate: true
    };
}
/* harmony default export */ const pages = (IndexPage);


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(67));
module.exports = __webpack_exports__;

})();