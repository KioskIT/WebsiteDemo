var modifier = "none";
var selected_element;

function registerClick()
{
    var element = document.activeElement;
    if (element.tagName == "INPUT")
    {
        showKeyboard();
        selected_element = element;
    }
    else
    {
        hideKeyboard();
        selected_element = null;
    }    
}

function createKeyboard()
{
    document.getElementsByTagName("body")[0].setAttribute("onclick", "registerClick()");
    
    var keyboard = document.createElement("div");
    keyboard.setAttribute("class", "keyboard");
    keyboard.setAttribute("id", "keyboard");
    keyboard.style.visibility = "hidden";
    document.body.appendChild(keyboard);
    
    // Numbers row
    var keyboard_row = document.createElement("div");
    keyboard_row.setAttribute("class", "keyboard_row");
    keyboard_row.setAttribute("id", "keyboard_row_0");
    keyboard.appendChild(keyboard_row);
    
    var key;
    for (i = 1; i < 10; ++i)
    {
        key = document.createElement("div");
        key.setAttribute("class", "key_number");
        key.setAttribute("onclick", "pressKey('" + i + "')");
        key.setAttribute("id", "key_" + i);
        key.innerHTML = i;
        keyboard_row.appendChild(key);
    }
    
    key = document.createElement("div");
    key.setAttribute("class", "key_number");
    key.setAttribute("onclick", "pressKey('0')");
    key.setAttribute("id", "key_0");
    key.innerHTML = 0;1
    keyboard_row.appendChild(key);
    
    // First row
    keyboard_row = document.createElement("div");
    keyboard_row.setAttribute("class", "keyboard_row");
    keyboard_row.setAttribute("id", "keyboard_row_1");
    keyboard.appendChild(keyboard_row);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('q')");
    key.setAttribute("id", "key_q");
    key.innerHTML = "q";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('w')");
    key.setAttribute("id", "key_w");
    key.innerHTML = "w";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('e')");
    key.setAttribute("id", "key_e");
    key.innerHTML = "e";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('r')");
    key.setAttribute("id", "key_r");
    key.innerHTML = "r";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('t')");
    key.setAttribute("id", "key_t");
    key.innerHTML = "t";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('y')");
    key.setAttribute("id", "key_y");
    key.innerHTML = "y";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('u')");
    key.setAttribute("id", "key_u");
    key.innerHTML = "u";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('i')");
    key.setAttribute("id", "key_i");
    key.innerHTML = "i";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('o')");
    key.setAttribute("id", "key_o");
    key.innerHTML = "o";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('p')");
    key.setAttribute("id", "key_p");
    key.innerHTML = "p";
    keyboard_row.appendChild(key);
    
    
    // Second row
    keyboard_row = document.createElement("div");
    keyboard_row.setAttribute("class", "keyboard_row");
    keyboard_row.setAttribute("id", "keyboard_row_2");
    keyboard.appendChild(keyboard_row);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('a')");
    key.setAttribute("id", "key_a");
    key.innerHTML = "a";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('s')");
    key.setAttribute("id", "key_s");
    key.innerHTML = "s";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('d')");
    key.setAttribute("id", "key_d");
    key.innerHTML = "d";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('f')");
    key.setAttribute("id", "key_f");
    key.innerHTML = "f";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('g')");
    key.setAttribute("id", "key_g");
    key.innerHTML = "g";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('h')");
    key.setAttribute("id", "key_h");
    key.innerHTML = "h";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('j')");
    key.setAttribute("id", "key_j");
    key.innerHTML = "j";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('k')");
    key.setAttribute("id", "key_k");
    key.innerHTML = "k";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('l')");
    key.setAttribute("id", "key_l");
    key.innerHTML = "l";
    keyboard_row.appendChild(key);
    
    // Third row
    keyboard_row = document.createElement("div");
    keyboard_row.setAttribute("class", "keyboard_row");
    keyboard_row.setAttribute("id", "keyboard_row_3");
    keyboard.appendChild(keyboard_row);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_modifier");
    key.setAttribute("onclick", "pressKey('capslock')");
    key.setAttribute("id", "key_capslock");
    key.innerHTML = "Caps Lock";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('z')");
    key.setAttribute("id", "key_z");
    key.innerHTML = "z";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('x')");
    key.setAttribute("id", "key_x");
    key.innerHTML = "x";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('c')");
    key.setAttribute("id", "key_c");
    key.innerHTML = "c";
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('v')");
    key.setAttribute("id", "key_v");
    key.innerHTML = "v";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('b')");
    key.setAttribute("id", "key_b");
    key.innerHTML = "b";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('n')");
    key.setAttribute("id", "key_n");
    key.innerHTML = "n";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_letter");
    key.setAttribute("onclick", "pressKey('m')");
    key.setAttribute("id", "key_m");
    key.innerHTML = "m";
    keyboard_row.appendChild(key);
    
    key = document.createElement("div");
    key.setAttribute("class", "key_modifier");
    key.setAttribute("onclick", "pressKey('close')");
    key.setAttribute("id", "key_close");
    key.innerHTML = "Close";
    keyboard_row.appendChild(key);
    
}

function showKeyboard()
{
    document.getElementById("keyboard").style.visibility = "visible";
}

function hideKeyboard()
{
    document.getElementById("keyboard").style.visibility = "hidden";    
}

function toggle(element)
{
    console.log(element.style.background);
    if (element.style.background == "#000000" || element.style.background == "rgb(0, 0, 0)")
    {
        modifier = "none";
        element.style.background = "#f5f5f5";
        element.style.color = "#565656";
    }
    else
    {
        modifier = "capslock";
        element.style.background = "#000000";       
        element.style.color = "#ffffff";
    }
}

function pressKey(key)
{
    if (key == "close")
    {
        hideKeyboard();
    }
    else
    if (key == "capslock")
    {
        toggle(document.getElementById("key_capslock"));
    }
    else
    {
        if (selected_element != null)
        {
            if (modifier == "capslock")
            {
                selected_element.value += key.toUpperCase();
            }    
            else
            {
                selected_element.value += key;
            }
            
            selected_element.focus();
        }
    }
}

