String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function getProp(trList) {
    var trList = $($('.definition')[2]).find('tr');
    let strProp = '';
    let strData = '';
    let strDef = '';
    trList.each(function () {
        const prop = $(this).find('td').first().text()
            .trim();
        const val = $(this).find('td').first().next()
            .text()
            .trim();
        if (!prop) return;
        if (val == 'true' || val == 'false') {
            strProp += `@Prop() private ${prop}!: boolean;\n\n`;
            strDef += `${prop}: boolean;\n`;
            strData += `${prop}: this.parseBool(this.${prop} || ${val}),\n`;
            return;
        }
        if (val.indexOf(':') >= 0) {
            strProp += `@Prop() private ${prop}!: any;\n\n`;
            strDef += `${prop}: any;\n`;
            strData += `${prop}: this.${prop},\n`;
            return;
        }
        if (!isNaN(parseInt(val))) {
            strProp += `@Prop() private ${prop}!: number;\n\n`;
            strDef += `${prop}: number;\n`;
            strData += `${prop}: this.${prop} || ${val},\n`;
            return;
        }
        strProp += `@Prop() private ${prop}!: string;\n\n`;
        strDef += `${prop}: string;\n`;
        strData += `${prop}: this.${prop} || '${val}',\n`;
    });
    console.log(strProp);
    console.log('==============');
    console.log(strDef);
    console.log('==============');
    console.log(strData);
    console.log('==============');
}

function getCallback() {
    const trList = $($('.definition')[4]).find('tr');
    let strCallback = '';
    trList.each(function () {
        const prop = $(this).find('td').first().text()
            .trim();
        strCallback += `${prop}: () => {
            if (self.elProp.preventEmit) return;
            self.$emit('${prop}');
        },\n`;
    });
    console.log(strCallback);
    console.log('==============');
}

function getFunc(preName) {
    const trList = $('.definition').find('tr');
    let strFunc = '';
    trList.each(function () {
        const prop = $(this).find('td').first().text()
            .trim();
        const funcNameSplit = prop.split(' ');
        let funcName = funcNameSplit[0];
        if (funcNameSplit.length > 1) {
            for (let i = 1; i < funcNameSplit.length; i++) {
                funcName += funcNameSplit[i].capitalize();
            }
        }
        strFunc += `
        ${funcName}() {
            $(this.$refs.el).${preName}('${prop}');
        }\n`;
    });
    console.log(strFunc);
    console.log('==============');
}
