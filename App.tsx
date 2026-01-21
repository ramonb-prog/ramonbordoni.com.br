import React from 'react';
import { CTAButton } from './components/CTAButton';
import { FaqItem } from './components/FaqItem';
import { CheckIcon } from './components/icons/CheckIcon';
import { FadeIn } from './components/FadeIn';

// Base64 para a imagem de fundo de teia/formas geométricas
const WEB_BG_SVG_BASE64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzBkOTQ4ODtzdG9wLW9wYWNpdHk6MC4xOCIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxZTI5M2I7c3RvcC1vcGFjaXR5OjAuMDciIC8+PC9saW5lYXJncmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZhtPSI4MDAiIGZpbGw9IiNmOGZhZmMiLz48ZyBzdHJva2U9InVybCgjZ3JhZDEpIiBzdHJva2Utd2lkdGg9IjEuNSI+PHBhdGggZD0iTTAgMCBMODAwIDgwMCBNMCA4MDAgTDgwMCAwIi8+PHBhdGggZD0iTTQwMCAwIEw0MDAgODAwIE0wIDQwMCBMODAwIDQwMCIvPjxwYXRoIGQ9Ik0yMDAgMCBMODAwIDYwMCBNMCAyMDAgTDYwMCA4MDAiLz48cGF0aCBkPSJNNjAwIDAgTDAgNjAwIE04MDAgMjAwIEwyMDAgODAwIi8+PC9nPjwvc3ZnPg==";

// Base64 da foto de Ramon Bordoni com os certificados
const RAMON_PHOTO_BASE64 = "data:image/jpeg;base64,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AAh/9oADAMBAAIRAxEAPwD6V+LHxJ1P4ceItEuVnZ9Evlktr6EAYjYBTFMvfJ+ZWxjIVuSQK8y+EHiDU7DxV8fB1sYmSeRhC+dizIxcbupwJIn+U88d69X+N/hj/hIfhLfymLzvsQCX0W3lZVAJb/vnbjH+1XjXwJ1v+xfi9rEVw2yDWNPuHh95bUxTD80M/wBQa/n DixN+IMBhcdhpXzKVOtG/wDNHCqSi/5zCVOfykj6hBBGQcgivlr9unwN/bfwph8R20eZ/DtwsrHHJWQgP+Qfzfyr6iXoK57xroMPivwVrWjXChkv7WSLkZwxBKMPdWAI9xX9IcV5VHNcixuXT3r05Rj6uL5X8pKLP8AP/6O/FdXhHjPOKcJw+tXLsVSrTXeLOTjVi/SVNzhLylI/O39iDxz/wRlt8ItR8O3Umy21+DyVUntNhXP1J3D6kVeJ/FLRx4a+J/inSwoVbLUp0QDsjMXQfkwrv8AwPq8nwz/aC0u6nPlLpfjS1E56bfMbybn6DDo34ivR/23Ph6NqvGlj4xtY/+jaoYrgQOg8xjhS3+8gUf981/mdmNOfDPxTYrBtLSFrc9hJ9KdXnpy+Tk0f7lcP1aPjLwEwOZ4tWr4XJcBjqb2u6uBo/V8VS/wATpVqnLpGMj6n+AXxAPxO+Emj65MQ140Zgu8cjzoztY/UBj9DXodee/AH4gH4nfCWj65MQ140Zgu8cjzoztY/UBj9DXodev4Szo5zwxYXMYXlUrU1OT3c4rllF/OSSZ/vR9F3jOpxh4DyPPsS718Vg6c6rfeVWEeStaT9ailL5hRRRX0x+4BRRRQAUUUUAIooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//0Po/4v+AIvifD/VNBJ/fTPLbSN/yymXlGPsDwT2BJr4B/Z61+5+Hfx5j0y/DRC+lk0i6R+MMxITYfXewP8AwEV+oNfmn+1/4Dk8I/FqLxJZKY7bWkFwHUYAnTAkX6kYf6sa/k76QfD7xOUVOKMLG9bBVFW039nU0l/4DVUX6SP7A/QA4zjl3Emc8AY6fLRzLDvCU+bT/AGzBzbpR9Z4eVZ+sEfpgpyAR3rxj9pzwxH4m+B+u7k3TaelvqERxyDG43H8ULivV9Du11PRLC8QgpdwRzKR3DKCK5z4rRiX4WeLEboyay/kY+mK/qjiDAxx2S4zCS2qUpw+9NL9T/E/6PnEVTh/jPJc5oy5Z4THYeqmvSqp/wDAPzW+F95Jp3xl8MTRNtcatbLn3LhSPxBNe6fts6UNQ+ENreY+fT76Nyf9lgyf+hFa+RfhVNJB8W/CjREh/wC1bZBj/acKf0Jr7W/at0tr34IapMFy1ncW8w+hkCH9Gr+OOCav1XjfhqrHSMsRBfc7x/zP9s/pJYH+3PAXifL6itOOU1qq/x0FGsr/ADp2PpLwVqY1rwdouoqdwvbKGcH13ID/AFqx4j1QaLoGoagxAWzt5JifQKpP9K+Xf2HfiD/b/wANbjwzcSbrrw/LhATkmCTJUf8AfW8fQCvf/jBqQ0j4TeK75iALKwuJsn0EbV/dfAHEdPizhnA53SaeIrUo+0S6VVFOa+U+ZH+Of0kfCzE+DnH2d8L4qMo4XA4qpHCzkv+Ybbf1eX/AHCUG33TPAf2F9JafxR4z1hxzbwxWob18x2cj8PLWvsg9K+T/wBiLTDa/DG/vSMG+1J2B9VRUUf+hGvrA9K+1+jdgI5d4W5TTStz051H6zqSb/JI/wBFvoD5XTyzwe4bw8FaUsJCu/WvKVT/ANuCiiivvD+kwooooAKKKKACKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//0fo0dK+av23vCA134Rw65GmZ9Du1kJxyYpPkYfng/hX0qOlfOv7XviCLSPgrfacWBn1e4htYl7naxkJHsAuPqRX8y+NeCxGP4GzTC4OLeInQlyJbvS7S9ZJNLuf2n9C/PMuyDxU4YzPOKipYGlmFGVeTeiim1GTfSKk032SPU/gvria/8ACbwxfhs/8EviibnkNGNiEfioryT9ubWxpvwes7ENh9Q1CNceqKrP8A+hBK9L/Zw8Py+HfgdoEU6mOa5ie6ZT1HmuXUH3CkD8K8U/bs0Wa6+HGi6lGpKaZqI809lWSMhSfcnaPoTX3PGuXTxXhRjsLhr80sHKMLb3dN8q+9n9K/RZ4jwuC+kDkGZZryxpRzahKtzacvJOd5SfZKPMz5x+A9zHY/GnwfPMwVE1KEEnpubaP1Ir74+OViNR+DPi+3IzusJmA/wB1dw/Va/JLwvqsuh+KdK1SEkS2F3FcKR1BRg38q/W/4jWEmtfCvxJZxjMlzpdyigdyYiQB+Nfzb9H7Ewlg84w+1SNeM//Ao2/wcb/AG2OGnmXDnhzmVLWE8Bj6SfdQq0Jr80z8+/2Jb42/xqt4ckLeWM8ZHqQCw/8AQa90/bnu2h+EmkwgnE2qR5HrtjkP8yK8G/YwtmuPjpp7rkC3t55CR6Fdo/8AQq9s/bi02W4+FmnXaAlLXUULnsAyOB/Ovz3wvovH+E2Z4WOv+z1pfcqbf5H9h/TEx8Mn+kvwpmlX3YxzjLa0n2j9Yo8z+S1O2/Z6tRa/BHwhGBgmzEh/wCBszf+zV6bXEfBm0+x/CXwlb4wU023z/wLbmu3r+8OCMP9V4by+h0hQpr7oJH+H30isw/tjjvPcYnec8fiql+6daVhRRRXtn5EFFFFABRRRQAUUUUAFFFFABRRRQAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//S+jR0FfkH7cni9/EHxdsfDls5kttGgAYLztmk+Yj6hSg+ua/QJjhSfYV+N/iLrsnxS+OOr38TmWLV9W8u2bOQFDCOHHsFC1+E/SL4qll+R4bIsM+XEY+ajKz19nHVy+Unyt+TPrPoBcEU+IuNcw4vxy58FkVGVampK6li5xcaSt2lFTi/73Kz9T/hX4ZTwd8NfD+iBAjWlqiSKB/Gw3P/AOPMa5z9oTQ4/EHwM8VW7qGNvayXiZHIeEeYCPqVxXo9rbrZ2sMCcRwoEUewGKyfGdu134M1uBBl5rKaNR7lCK/pDOsDTxOW18PVV4yptNejTR/E3hFxRicv4zwOdYqf72nmEKs5O2sqdW8n87Ox+RnwTlaH4zeD2Q4P9pwL+bYr9QPj9pn9sfBDxjb4yVspJgP9wB/wCgr8wvhJO1v8XfCcitg/2pbrn3LhT+hNfrd8T7T7d8NPEtuBkzafOoHuyoB+or+dvoc1JUK+fYSWjU6T+cWf7N/toYOnmXDnhzmVLWE8Bj6SfdQq0Jr80z8+/2Jb42/xqt4ckLeWM8ZHqQCw/8AQa90/bnu2h+EmkwgnE2qR5HrtjkP8yK8G/YwtmuPjpp7rkC3t55CR6Fdo/8AQq9s/bi02W4+FmnXaAlLXUULnsAyOB/Ovz3wvovH+E2Z4WOv+z1pfcqbf5H9h/TEx8Mn+kvwpmlX3YxzjLa0n2j9Yo8z+S1O2/Z6tRa/BHwhGBgmzEh/wCBszf+zV6bXEfBm0+x/CXwlb4wU023z/wLbmu3r+8OCMP9V4by+h0hQpr7oJH+H30isw/tjjvPcYnec8fiql+6daVhRRRXtn5EFFFFABRRRQAUUUUAFFFFABRRRQAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//T+kZDhSfYV+MPj67f4rftA6pNA3mjV9a8uAjnaodY4wPbAUV+zR6V+LXwwY+Bv2k9Mjudsa6Vr32eUnphnMbZ/wCBZr+S/pNYurjMnyzKKGtXEYiEkvLRP8z+7/2N8gw2T8T8UcW5h/u+ByvFUazfRzbqci/xSjCT9EfsiihFCKAqqMAAdAKxfGMIuPB+twN0ksplP4oRW0DkAjqDWF40kEPg/W5D0Syma/8AjhV/U2ZpPL6qf8j/U/wCHeBSjxLgJR+zXg//ACZH4+/CKZoPiz4TkQ4P9qWw/76kCn9Ca/Wf4gWX9pfD/wARWmM+fYTon1ZCK/Iz4SytD8XfCUinaf7VtVB9i4U/oTX6/wCo24vNPurds7biNozj0Iwa/BPoX4uVLN8yw7elGjF/fNp/kf69ftrcNxrcM8I5nFfwsyxuHf+KphadeP/lOTZ8A/sP2bS/Gm7uACVttNlJI6Al0A/rXtf7cdhJc/CmwuVUlbXUULnsAyOB/OvQv2fPg7ffCDV/FDXV/Fe2esNHJakLtePYXJDDJByHHX0rX/AGk9CfxB8DfEkEKGSaGBLpFAyT5TiRgB3JVSPxr884N8Mc04V8Jsx4ZxNljsQsV7Oz0cqlPlgv+3rKPqf3R4//SZ4T8S/pI8M+ImSS58myyeVvFTa92NHC4tVsTL/ALhRcpPske0+Cbc2fg3RbduGt7KGJvqEArdrB8F3Au/BuiXC8rPZQuD65QGt6v7ly1xll9Jx25Vb5H/C3xNGpDiHMY1f4ixFXm/7f53f8QooorqPECiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//1P6F1G6FjYXNyekEbSE+wGa/Fb4ezv8QP2h9MlnPmHV9c8+YHqVDtI3/AI4BX7S+IdPOr6BqNgud15byQjHqwI/rX4zfB26Phj4/eHotQBtmt9Za1lEgxt3Fo8n2ywr+UfpeYqjjspy7Azdqs6vOlfW0U1f8A8FP70/YvyzG5DxjxVndGD+qUsFHDuo1pGdeceT/AMqUYya7WP2eHSsjxpp51fwbrViBlryzlhA92QitYdBSMoZSpGQRgiv6gxWHjiMPUoT2mnF/NWZ/i3lOPrZVmGHx+Hdp4epGpB+cZKSf3pH4nfDHWF8HfGHQL+9H2YWWrLHOXGAqltj5+hJNftUrBlBHIIyK/Gb41/Dp/hn8TNW0ZVZbRJPNtC3/PKTlR7kcqfVTX6k/s4fEA/Ef4RaTfzyGS+tB9jusnktHwCf95drfU1/B30Wc+r4jN81yLFv8AjJVqSa0coXT/ABg5eh/vT+3twJlOV8P8LeIWTwSwmUuWAxEqa9yEa/72jLtyzVWS7cyR6xRXk/7QPxG/4Vd8J9U1iKQJe3A+yWfPO+TgEf7oy30Fen/D3xAPFfgLQtaDby9pB5pznLxqEkP4upNf1vhs4wmKzavgKLvWpQjUkuyk5JL1fLL7j/ADLzjgbOco4QwXGGNouGW4/FVMHh6j2nVpQpTqW7qKqxt3vbozdooorsPnQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9X6MHQV+an7bvw9/4Z+Jlt4rtY9un67GrSso4FwgAbP+8u1vqa/SmvlT9un/knegf8AYST/ANEvX8ufSE4flmnh5ia9NWq4SUasX2XMoy+ThJv5I/t76A3GMsj8VMBlFat7LAcQU6uX1YuWi9vS5sO32ftaapN9FKR9NeE9eTxR4S0rWYWDC/tI5/rld2fqGJB9xXlH7U3jn/AIQn4KaoIJNl9quNPgwcH5+WI+iBvrivQfhB/wAke8H/APYJtP8A0UK+R/27PEs9z448O+HYmbybKz+1kZ4LyuUOPoEH/fVfe8a8S/2R4d4nNKb5ZVKLVN/35rlh97lE/pH6Nnhd/xFvHvh3hajHnweFxscwxd9lRwr+sVL+UuRQa7zR4T8Evh9N8TPifpGjKhktVk8+8bH3Yk5bJ9zwPdiv118IeH7fwl4T0nRrRAlvYW6QrjvkZP4kkk+5r4R/ZB+OvhX4ZaZrWieK7w6dHf3K3dvcGNnQtt2sCQCQQAv5V9w+B/iD4f+JGktrHhq+F9ZiRoZCUaNkdQCVZWAIOCD06Gv5y+jLw7m/CeS4ytndKVOpiKikoyWjjFLVrvzOVvI/2s/bs4/4P8AF7jXJMq4JxFPG4XJsJKlVr0Zc9KpWr1Hy04TWkoqmqanKzTcktbHwn+0Zef8Le/aU0zwnp58y30uSKwlZeRknfOR6bQqg/7tfovp+mx6T4fg0+3G2O0t1hRfRVTAr84/wBnWD/hYH7Vl/rlz+9XS7m91JSeRuJZI+fQNIT/AMBFfpQOgrwPAGVXF4riDiutrVzHFS5X2jH4V8veifsj+20qmV8M+GXhpgrRwWSZTh5VIraVao/aVJSttJvDyb73Ciiiv6KP8mwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//1vowdK+VP26f+SnaB/wBhJP8A0S9fVVfKn7dP/JTtA/7CSf8Aol6/nn6Sn/JCYz/FH/0uB/Xf0Bf+Uq5H/wBgeI/9M1T3rw/8WvDXgv4EeBNR8SatDp63Gj2ghjcF5ZCIUztRQS2MjJxgZFfFPjzV5P2lv2krN9Itpxpd7LDZoJF2kW0eAzsASAT87Yz1xX0T8D/AIHeG/in8E/Bdz4kS8eXTbVvsptbl4fLDTyZDbTlhlRwDjjnNM+Dvwf0X4cftH63ZeHZrt9P0fTI3t/tkiylWlePeuQoGAEA6Z5PPp/Nea5Fxdx1g+Gsv4moKlVw2Mo1675ouUvZO0qkbN296yUbtq1tT/AEu4J8QPoz+EWZeJPEvhPmEsZgM44dxuWZLTVKtGnhaea05U8LhZTlTjGpP2E5Sr1UnCcpqpZtJH1n8JfhF4f+D+iS2GgxvJNdFWu7uYgyTsowMgAAKMnAGBzySSTXV6v4V0nXdV0vUdSs4rq80d2lsZHBzC52kkYPoqkZzjacd62KK/trA5JleVYSngMuw8KGHp35YRSUU27uyXdtv5n+C+ecYcUcVZnXz7ifMKuNzHEqLq160nOpU5YqMeaT1bUYxiu0UkFFFFdZ4B+bnwqh/4VP+1v/AGZcnyobHVJ7AnOAEly0J/NoxX6MnpX5gftkaLcaD8ZLLWbQNHJqNpBdRyLwTKhKHJ9gqV+iXhDxDF4t8H6RrNuQ0V/axzDHbIG4fgcj8K/iP6OEpZNxNxHwpV05a3tYr+9HmTfqnGP3H/AEr+3LClxh4b+GnjDhEub+z4rLq9Rb+xxVOFSi3/AIJwr83942qKKK/oM/yqCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9f6MHQV4d8Y/wBnTS/jB4otonavdWuNOurW2FqRAisGCsWB+bpgk/nXulFfGcScJZLxfllTJc/wAPHE4So05Qk2k2ne2jT3Sfu9Ef0x4YeLXF3hjnlPiTgrMqmBzXDxlGnXppc0FKLjJJuLWsW09Nr20PIfg/wDs86N8GdWvtQ0rU7zUJr6AW7i5VVCqGDDAX1GRz6mvTaKK9HhzhjI+FcpocP8AD+GjhMFRvyU4ttRvJyfVt3bb3fU8PjnxE4t8R+I8VxXxrmM8dm+K5fayyUYqpyRUIXUYxWsYxWy2V9Qooor0jwDwr9qz4at8Rvg/dm0hMt/o/+nQbRyQg/eKPdkyAP7xWvIP2J/ib9p0fU/h/fSfvbDM9kCeTGx/eKPox3H/fPpX15X5g/FLw/qH7N/wC0Vb+JNFgaTSNQne7t41yFSOTPnQ+mFJO3uQUr+VvGnDVuAuNsBxzQTWFxMvY4ix8l8a81F8z7KJP8ARz6F2cYDxH8HuI/CPiGpH+1MlpfWsmdR2dSjWSdGmn0cMTFUf+v1Y/T+ivL/AIcfHjwZ8U4YV0PVY1vpACP8A908j5yC0g2k9yD716hX9R5bxHk+fYeOMynFwxFGW0oSUl8rrY/xN4t4J4u4LzGpk3F+U4jJ8fS+KhyoSpVItd4ySfz27hRRRXceKFFFFABRRRQAUUUUAFFFFABRRRQAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9D6j8Q3QsNDvbhjgRQyNk+wzX4nfD6dviJ+0Zpc058xdX1zz5geqncZG/wDHAa/afxBoqa1ol/YSAbbuCSMj6gj+tfjP8Hbj/hFvj/oV5fD7O1trRtpRIAV3FmP/AI8hr+UfpRYunjMpynAzdqs6vOlfW0U1f/wAFP73/AGMcsx/g7xVxXndGD+qUsFHDuo1pGdeceT/AMqUYya7WP2eHSsjxnp51fwhrVgBk3lpLCB7sgFa3QUDkAjqCK/q/FYeOMw9ShPeScX81c/xbyfHVsrzDDY/D+CrRqU5rzjJSj96R+Jvwz1k+D/jF4dv71fsxs9VWOd2GAqltkZ+hJNftUrBlBHIIyK/Gb41fDp/hn8TdW0fYZLVJPNtC3/PKTlR7kcqfVTX6k/s4fEA/Ef4RaS/nyGS+tB9jusnktHwCf95drfU1/B30Wc+r4jN81yLFv8AjJVqSa0coXT/ABg5eh/vT+3twJlOV8P8LeIWTwSwmUuWAxEqa9yEa/72jLtyzVWS7cyR6xRXk/7QPxG/4Vd8J9U1iKQJe3A+yWfPO+TgEf7oy30Fen/D3xAPFfgLQtaDby9pB5pznLxqEkP4upNf1vhs4wmKzavgKLvWpQjUkuyk5JL1fLL7j/ADLzjgbOco4QwXGGNouGW4/FVMHh6j2nVpQpTqW7qKqxt3vbozdooorsPnQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//0foiiiigAooooAKKKKACiiigD5b/bA+BV78T9BsPEXhu0e713RgyPbxDLz27HOFHeRDyB1JJA5Ir51/Z3/ay1H4dWCeEvGFhc6lYWBMEFwi5ubeIcfKo/1iDkY5I7Gv0/r5j/AGlv2V9N+KcNx4k8Lxw6b4qUbpVCiOK+PfzAON/v379wa/H+OvD/AIiyviPD+IvBVX2WNhG1ejJpRlFJq/K9JJxspRdnK2p/VHhD40+HWdeHeK8GvFrDrE5NiKjnluY04ynVoTqSUrTjFqcoyi+WdNShCLeqfU7/wADftW/CvxxbQY8QQ6NeMBlNR/0fae43nKH8DXrOj+JfD/iGMvourWOqJjO6zuI5xj1/dsa/I7wZ8BvinH410jStQ8Lapp6RXsSz3k0RiiSNWAY7yMEDPQZr7i+CP7Ifhz4R6xF4g1C7fxBrsBzbSyReXDbN1DIhLFmHZuMdQARmvp+DvEDxOz2dOlnfD8MLh5p3qRlUfK+/u1Ipr/t25834xfR88CeDqeMxHDXHeKzbMaEpRVGpToJVWmtKftMNUlGb/v8kUfPH7VHg+T4lftTaP4X8PwmS+NnDFK6DIg+88kzewQYPtketfov8NfAlh8NPAml+GtNKmDT4gGkA2mWQnLu3uWJPt07V49p/7PWpxftDT/FK+1q3mgSdrqHT4oiGTdEIwhcnHGOcdcn0r6Ir+j/CPw4xnDWOzjizPaSpY7N6kp+yWipxbcnGVuuiSWySsfwt9IXxqybjzLeE/DDgrFSxuQcKYWlSeJklzYqrGEYTqQ5bp0lyybk/ik20k7nyr+274Dt9a+F0XipIwdQ0K5TLgciGUhGUn03FD+Fcr+wR4Dm0zwjrfi64jKNrE4t7UsOkUY+Yj2ZyR/wABFfYXjDwvZeN/Cep6BqSbrTU4WhfjJUHoy+4OCK5T4P8AwuX4P+EIvDFrqc2pWFtI72wljCNGrHLDjoCTk+5OK9Gr4eT46Wc5vWpqGOrUnQpS/kjZ2T73lFtrdJHz9D6QUvAfwM4Z4UweIlW4Yy7NFm+Oox+PEKpSnDE1IJaLkwtSpShO2kpys20r+g0UUV+sH8WBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//2Q==";


const HeroHeader = () => (
    <header className="bg-graphite relative min-h-screen overflow-hidden flex flex-col justify-center">
        {/* Background base */}
        {/* Background base - User Provided Premium Image (Pure) */}
        <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
                backgroundImage: 'url("/img/background2-hero-xpress.png")'
            }}
        ></div>

        {/* Soft Radial Dark Overlay for text readability */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_30%_50%,rgba(2,6,23,0.08)_0%,transparent_70%)] pointer-events-none"></div>



        <div className="container mx-auto px-6 max-w-7xl relative z-50 flex flex-col min-h-screen">
            {/* Headline - Centralized at Top */}
            <div className="text-center pt-16 md:pt-24 relative z-50">
                <FadeIn>
                    <h1 className="font-serif text-[30px] md:text-5xl lg:text-[56px] text-white leading-[1.2] tracking-tight drop-shadow-2xl mx-auto max-w-5xl">
                        <span className="block mb-2">Marketing não falha por falta de execução.</span>
                        <span className="bg-gradient-to-r from-[#00A3A3] to-[#4FD1C5] bg-[#4FD1C5] bg-clip-text text-transparent font-semibold tracking-[-0.015em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] inline-block py-1" style={{ backgroundImage: 'linear-gradient(110deg, #00A3A3, #4FD1C5)' }}>
                            Falha por falta de clareza.
                        </span>
                    </h1>
                </FadeIn>
            </div>

            {/* Photo - Integrated in flow for Mobile, Absolute for Desktop */}
            <div className="relative -mt-24 mb-4 lg:mt-0 lg:mb-0 lg:absolute lg:bottom-0 lg:-right-20 z-40 w-full flex justify-center lg:justify-end pointer-events-none lg:-translate-y-8">
                <FadeIn className="w-full max-w-[350px] md:max-w-[500px] lg:max-w-[750px] xl:max-w-[850px]">
                    <div style={{
                        WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                        maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
                    }}>
                        <img
                            alt="Ramon Bordoni, Estrategista e Growth Hacker"
                            className="h-auto w-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] mix-blend-normal scale-110 origin-top lg:scale-100"
                            src="/img/Ramon-Bordoni-Hero-XPress.png"
                        />
                    </div>
                </FadeIn>
            </div>

            {/* Subtext and CTA - Below the Headline (Mobile) / Near the Photo (Desktop) */}
            <div className="text-center py-10 md:py-16 relative z-50 lg:text-left lg:max-w-xl lg:my-auto">
                <FadeIn>
                    <div className="space-y-6">
                        <h2 className="text-[18px] md:text-[24px] text-slate-300/80 font-sans font-medium leading-relaxed">
                            Antes de investir em <span className="font-bold text-white">anúncios</span>, <span className="font-bold text-white">agência</span> ou qualquer <span className="font-bold text-white">ação digital</span>, você precisa entender o que faz sentido para o seu negócio <span className="font-bold text-white">agora</span>.
                        </h2>
                        <p className="text-base md:text-xl text-slate-400/80 italic">
                            A maioria dos negócios perde tempo e dinheiro tentando “fazer marketing” sem saber <strong className="text-white not-italic">onde investir, o que priorizar e o que parar de fazer.</strong>
                        </p>
                    </div>
                    <div className="mt-10">
                        <CTAButton href="#oferta" size="large" className="drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
                            Quero clareza no meu marketing
                        </CTAButton>
                    </div>
                </FadeIn>
            </div>
        </div>
    </header>
);

const ProblemScenariosSection = () => (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
            <FadeIn>
                <h2 className="font-serif text-3xl md:text-4xl text-center text-teal-dark font-bold">
                    Talvez você se reconheça em pelo menos um desses cenários:
                </h2>
                <div className="mt-12 grid md:grid-cols-2 gap-6 text-slate-700 text-base md:text-lg">
                    <div className="bg-smoke p-6 rounded-lg shadow-sm">– Já pensou em contratar um gestor de tráfego, mas não sabe se é a hora certa</div>
                    <div className="bg-smoke p-6 rounded-lg shadow-sm">– Já investiu em anúncios, mas sem retorno claro</div>
                    <div className="bg-smoke p-6 rounded-lg shadow-sm">– Já fez site, Instagram, posts, campanhas… tudo meio desconectado</div>
                    <div className="bg-smoke p-6 rounded-lg shadow-sm">– Recebe propostas diferentes, cada uma puxando para um lado</div>
                </div>
                <div className="mt-12 text-center max-w-3xl mx-auto">
                    <p className="text-base md:text-lg font-semibold text-graphite">E o mais frustrante:</p>
                    <p className="mt-4 text-base md:text-lg text-slate-600">
                        Você sabe que seu produto ou serviço é bom. Sabe que existe mercado. Mas vender de forma constante ainda parece imprevisível.
                    </p>
                    <p className="mt-8 text-base md:text-lg font-bold text-teal-primary border-t border-b border-teal-primary/20 py-4">
                        O problema raramente é esforço. Na maioria das vezes, é <strong className="text-teal-dark">falta de direção estratégica.</strong>
                    </p>
                </div>
                <div className="mt-12 text-center">
                    <a href="#reenquadramento" className="inline-block font-sans font-semibold text-white bg-teal-primary hover:bg-teal-dark rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 px-8 py-3 text-base md:text-lg">
                        Isso faz sentido pra mim
                    </a>
                </div>
            </FadeIn>
        </div>
    </section>
);

const MarketingDecisionSection = () => (
    <section id="reenquadramento" className="py-16 sm:py-20 md:py-24 bg-graphite text-white bg-cover bg-center relative" style={{ backgroundImage: `url("https://picsum.photos/seed/chaos-to-order/1920/1080")` }}>
        <div className="absolute inset-0 bg-graphite/80 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <FadeIn>
                <div className="text-center">
                    <p className="text-base md:text-lg text-slate-300">Pouca gente fala isso, mas é a verdade:</p>
                    <h2 className="font-serif text-4xl md:text-5xl mt-4 text-white">
                        Marketing não começa com anúncios. <br /><span className="text-amber-400">Começa com decisão.</span>
                    </h2>
                    <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-slate-200">
                        Empresas que crescem não testam tudo. Elas <strong className="text-white">priorizam certo.</strong>
                    </p>
                </div>
                <div className="mt-12 max-w-2xl mx-auto bg-slate-800/80 p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">Sabem:</h3>
                    <ul className="mt-6 space-y-4 text-base md:text-lg text-slate-300">
                        <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">●</span> qual canal faz sentido agora</li>
                        <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">●</span> qual oferta precisa ser ajustada</li>
                        <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">●</span> qual etapa do funil está travando</li>
                        <li className="flex items-start">
                            <span className="text-amber-400 mr-3 mt-1">●</span> e onde&nbsp;<span className="font-bold uppercase">NÃO</span>&nbsp;vale investir neste momento
                        </li>
                    </ul>
                </div>
                <p className="mt-10 text-center text-xl md:text-2xl font-serif text-white italic">
                    Quem pula essa etapa, <strong className="text-amber-400">executa mais… e cresce menos.</strong>
                </p>
                <div className="mt-12 text-center">
                    <a href="#como-funciona" className="inline-block font-sans font-semibold text-white bg-teal-primary hover:bg-teal-dark rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 px-8 py-3 text-base md:text-lg">
                        Quero organizar meu marketing
                    </a>
                </div>
            </FadeIn>
        </div>
    </section>
);

const LookingForSection = () => (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
            <FadeIn>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-serif text-3xl md:text-4xl text-center text-teal-dark font-bold">Se você chegou até aqui procurando por:</h2>
                    <div className="flex flex-wrap justify-center gap-4 mt-8 text-teal-dark">
                        <span className="bg-teal-primary/10 py-2 px-4 rounded-full font-medium">gestor de tráfego</span>
                        <span className="bg-teal-primary/10 py-2 px-4 rounded-full font-medium">agência de marketing</span>
                        <span className="bg-teal-primary/10 py-2 px-4 rounded-full font-medium">anúncios no Google ou Instagram</span>
                    </div>
                    <p className="mt-8 text-base md:text-lg text-slate-700">Isso faz sentido.</p>
                    <p className="mt-6 text-base md:text-lg text-slate-600">Mas antes de colocar alguém para executar, existe uma pergunta que quase ninguém responde direito:</p>
                    <blockquote className="mt-8 border-l-4 border-brand-amber bg-amber-500/10 p-6 text-lg md:text-xl font-serif text-graphite text-left rounded-r-lg">
                        “<strong className="text-brand-amber">O que exatamente precisa ser feito</strong> no meu negócio para gerar resultado?”
                    </blockquote>
                    <p className="mt-8 text-base md:text-lg text-slate-600">Sem essa resposta, <strong className="text-graphite">tráfego vira aposta. Site vira vitrine vazia. Conteúdo vira esforço solto.</strong></p>
                </div>
            </FadeIn>
        </div>
    </section>
);

const ProcessSection = () => (
    <section className="py-16 sm:py-20 md:py-24 relative bg-cover bg-center" style={{ backgroundImage: `url("https://picsum.photos/seed/blueprint/1920/1080")` }}>
        <div className="absolute inset-0 bg-smoke/90 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <FadeIn>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="font-semibold text-teal-primary text-base md:text-lg">É por isso que, antes de qualquer execução, eu trabalho com um processo simples:</p>
                        <div className="mt-8 space-y-6">
                            <div className="flex items-start"><span className="font-serif text-3xl md:text-4xl text-teal-primary/30 mr-4">1.</span><p className="text-base md:text-lg mt-1 text-graphite">Entender o negócio de verdade</p></div>
                            <div className="flex items-start"><span className="font-serif text-3xl md:text-4xl text-teal-primary/30 mr-4">2.</span><p className="text-base md:text-lg mt-1 text-graphite">Analisar o que já foi feito (e o que não funcionou)</p></div>
                            <div className="flex items-start"><span className="font-serif text-3xl md:text-4xl text-teal-primary/30 mr-4">3.</span><p className="text-base md:text-lg mt-1 text-graphite">Mapear oportunidades reais de crescimento</p></div>
                            <div className="flex items-start"><span className="font-serif text-3xl md:text-4xl text-teal-primary/30 mr-4">4.</span><p className="text-base md:text-lg mt-1 text-graphite">Definir prioridades claras</p></div>
                            <div className="flex items-start"><span className="font-serif text-3xl md:text-4xl text-teal-primary/30 mr-4">5.</span><p className="text-base md:text-lg mt-1 text-graphite">Transformar tudo isso em um plano aplicável</p></div>
                        </div>
                        <div className="mt-8 border-t-2 border-teal-primary/10 pt-6 space-y-3 text-slate-500 italic text-base md:text-lg">
                            <p>Sem teoria desnecessária.</p>
                            <p>Sem achismos.</p>
                            <p>Sem fórmulas prontas.</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img alt="Estratégia e Análise" className="rounded-lg shadow-xl" src="/img/eu-notebook-icons.jpg" />
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
);

const BeforeAfterSection = () => (
    <section className="py-16 sm:py-20 md:py-24 bg-white relative">
        <div
            className="absolute inset-0 z-0"
            style={{ backgroundImage: `url("${WEB_BG_SVG_BASE64}")`, backgroundRepeat: 'repeat', opacity: 0.4 }}
        ></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <FadeIn>
                <h2 className="font-serif text-3xl md:text-4xl text-center text-teal-dark font-bold mb-12">
                    Quando não existe plano, qualquer ação parece a solução
                </h2>
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <img
                        src="/img/CASO1-CONSULTORIA-XPRESS.jpg"
                        alt="Cenário atual de marketing sem plano, mostrando frustração e resultados ruins."
                        className="rounded-lg shadow-xl w-full h-auto"
                    />
                    <img
                        src="/img/CASO2-CONSULTORIA-XPRESS.jpg"
                        alt="Cenário de marketing após o plano X-Press, mostrando clareza e resultados positivos."
                        className="rounded-lg shadow-xl w-full h-auto"
                    />
                </div>
            </FadeIn>
        </div>
    </section>
);

const XPressConsultancySection = () => (
    <section className="py-16 sm:py-20 md:py-24 bg-teal-dark text-white relative bg-cover bg-center" style={{ backgroundImage: `url(https://picsum.photos/seed/light-reveal/1920/1080)` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-dark/90 via-teal-dark/80 to-teal-primary/80"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <FadeIn>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-serif text-4xl md:text-5xl drop-shadow-lg">Esse processo se chama<br /><span className="bg-amber-400 text-graphite px-4 py-1 mt-2 inline-block rounded-md shadow-lg">Consultoria X-Press.</span></h2>
                    <p className="mt-6 text-base md:text-lg text-teal-100">Uma consultoria estratégica, direta e prática, criada para quem precisa clareza antes de investir pesado em marketing.</p>
                    <div className="mt-10 text-base md:text-lg space-y-2 text-teal-200">
                        <p>Não é um curso.</p>
                        <p>Não é uma mentoria longa.</p>
                        <p>Não é um plano de negócios de 30 páginas.</p>
                    </div>
                    <p className="mt-8 text-xl md:text-2xl font-bold bg-white text-teal-dark py-4 px-6 rounded-lg shadow-2xl">É um diagnóstico + plano de ação, feito sob medida para o seu negócio.</p>
                </div>
            </FadeIn>
        </div>
    </section>
);

const HowItWorksSection = () => (
    <section id="como-funciona" className="py-16 sm:py-20 md:py-24 bg-white relative">
        <div
            className="absolute inset-0 z-0"
            style={{ backgroundImage: `url("${WEB_BG_SVG_BASE64}")`, backgroundRepeat: 'repeat', opacity: 0.3 }}
        ></div>
        <div className="container mx-auto px-6 max-w-7xl relative">
            <FadeIn>
                <h2 className="font-serif text-3xl md:text-4xl text-center text-teal-dark font-bold">Como Funciona</h2>
                <div className="mt-20 grid md:grid-cols-3 gap-8">
                    <div className="relative border border-slate-200 rounded-lg p-6 pt-10 text-center shadow-sm h-full bg-white/80 backdrop-blur-sm">
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 font-serif text-8xl text-teal-primary/10 font-bold z-0">1</div>
                        <div className="relative z-10">
                            <h3 className="font-serif text-2xl text-graphite">Diagnóstico Estratégico</h3>
                            <p className="mt-4 text-slate-600 text-base md:text-lg">Você responde a um briefing simples. Eu analiso seu negócio, mercado, posicionamento e histórico de ações.</p>
                            <p className="mt-4 font-semibold text-graphite text-base md:text-lg">Aqui o foco é entender:</p>
                            <ul className="mt-2 space-y-1 text-slate-600 text-base">
                                <li>● onde está o gargalo</li>
                                <li>● o que está desalinhado</li>
                                <li>● e onde existe potencial real de crescimento</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative border border-slate-200 rounded-lg p-6 pt-10 text-center shadow-sm h-full bg-white/80 backdrop-blur-sm">
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 font-serif text-8xl text-teal-primary/10 font-bold z-0">2</div>
                        <div className="relative z-10">
                            <h3 className="font-serif text-2xl text-graphite">Plano de Ação Personalizado</h3>
                            <p className="mt-4 text-slate-600 text-base md:text-lg">Com base no diagnóstico, eu construo um plano claro e objetivo, normalmente para os próximos 30 a 90 dias.</p>
                            <p className="mt-4 font-semibold text-graphite text-base md:text-lg">Definindo:</p>
                            <ul className="mt-2 space-y-1 text-slate-600 text-base">
                                <li>● funil mais adequado</li>
                                <li>● canais prioritários</li>
                                <li>● ajustes de oferta e posicionamento</li>
                                <li>● próximos passos estratégicos</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative border border-slate-200 rounded-lg p-6 pt-10 text-center shadow-sm h-full bg-white/80 backdrop-blur-sm">
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 font-serif text-8xl text-teal-primary/10 font-bold z-0">3</div>
                        <div className="relative z-10">
                            <h3 className="font-serif text-2xl text-graphite">Call de Apresentação (1:1)</h3>
                            <p className="mt-4 text-slate-600 text-base md:text-lg">Marcamos uma call individual para eu apresentar o plano, explicar o raciocínio e tirar dúvidas.</p>
                            <p className="mt-4 font-semibold text-graphite text-base md:text-lg">O objetivo não é te convencer de nada. É te deixar seguro para decidir os próximos passos.</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
);

const DeliverablesSection = () => (
    <section className="py-16 sm:py-20 md:py-24 relative bg-cover bg-center" style={{ backgroundImage: `url("https://picsum.photos/seed/clarity-path/1920/1080")` }}>
        <div className="absolute inset-0 bg-smoke/80"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <FadeIn>
                <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="font-serif text-3xl md:text-4xl text-center text-teal-dark font-bold">O que você sai levando</h2>
                            <p className="mt-6 text-base md:text-lg text-slate-600 text-center">Ao final da Consultoria X-Press, você terá:</p>
                            <ul className="mt-8 space-y-4 text-base md:text-lg">
                                <li className="flex items-center"><CheckIcon className="w-6 h-6 mr-3 text-teal-primary" /> Clareza sobre o que está travando suas vendas</li>
                                <li className="flex items-center"><CheckIcon className="w-6 h-6 mr-3 text-teal-primary" /> Um plano de ação prático e priorizado</li>
                                <li className="flex items-center"><CheckIcon className="w-6 h-6 mr-3 text-teal-primary" /> Direção estratégica para marketing e vendas</li>
                                <li className="flex items-center"><CheckIcon className="w-6 h-6 mr-3 text-teal-primary" /> Entendimento do que focar — e do que cortar</li>
                                <li className="flex items-center"><CheckIcon className="w-6 h-6 mr-3 text-teal-primary" /> Segurança para investir com mais consciência</li>
                            </ul>
                        </div>
                        <div className="bg-teal-primary/10 p-8 rounded-lg text-center">
                            <p className="text-base md:text-lg text-slate-600">Em resumo:</p>
                            <p className="font-serif text-3xl md:text-4xl text-teal-dark mt-2">você para de reagir e começa a decidir.</p>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <CTAButton href="#oferta" size="large">
                            QUERO A CONSULTORIA X-PRESS
                        </CTAButton>
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
);

const DisclaimerSection = () => (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
            <FadeIn>
                <div className="bg-smoke border-l-4 border-brand-amber p-8 rounded-r-lg max-w-3xl mx-auto">
                    <h3 className="font-serif text-xl md:text-2xl text-graphite">Essa consultoria <span className="underline">não</span> é para quem quer apenas rodar anúncios.</h3>
                    <p className="mt-6 text-base md:text-lg text-slate-700">Ela é para:</p>
                    <ul className="mt-4 space-y-2 text-base md:text-lg text-graphite list-disc list-inside">
                        <li>empresários</li>
                        <li>decisores</li>
                        <li>pessoas que querem estruturar crescimento</li>
                        <li>e entendem que <strong className="text-brand-amber">execução sem estratégia custa caro</strong></li>
                    </ul>
                    <p className="mt-6 text-slate-600 italic text-base md:text-lg">Se você busca alguém só para “apertar botões”, provavelmente não faz sentido começarmos por aqui.</p>
                </div>
            </FadeIn>
        </div>
    </section>
);

const AboutMeSection = () => (
    <section className="py-16 sm:py-20 md:py-24 bg-smoke relative">
        <div
            className="absolute inset-0 z-0"
            style={{ backgroundImage: `url("${WEB_BG_SVG_BASE64}")`, backgroundRepeat: 'repeat', opacity: 0.5 }}
        ></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <FadeIn>
                <div className="grid lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-2 flex justify-center">
                        <img alt="Ramon Bordoni" className="rounded-lg w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl" src="/img/eu-pc.png" />
                    </div>
                    <div className="lg:col-span-3">
                        <h2 className="font-serif text-2xl md:text-3xl text-graphite">Sou <span className="text-teal-primary">Ramon Bordoni</span>, estrategista de marketing digital.</h2>
                        <p className="mt-6 text-base md:text-lg text-slate-600">Já atuei em:</p>
                        <div className="mt-4 flex flex-wrap gap-3 text-slate-700">
                            <span className="bg-slate-200 py-1 px-3 rounded-md text-sm">lançamentos digitais</span>
                            <span className="bg-slate-200 py-1 px-3 rounded-md text-sm">negócios locais</span>
                            <span className="bg-slate-200 py-1 px-3 rounded-md text-sm">B2B</span>
                            <span className="bg-slate-200 py-1 px-3 rounded-md text-sm">SaaS</span>
                            <span className="bg-slate-200 py-1 px-3 rounded-md text-sm">projetos políticos</span>
                            <span className="bg-slate-200 py-1 px-3 rounded-md text-sm">operações com alto investimento</span>
                        </div>
                        <p className="mt-6 text-base md:text-lg text-slate-600">Hoje, também atuo como estrategista e coordenador de projetos em uma agência de marketing digital, liderando projetos de empresas com diferentes níveis de maturidade.</p>
                        <div className="mt-6 border-t border-teal-primary/20 pt-6">
                            <p className="text-base md:text-lg text-slate-600">O padrão que sempre se repete é simples: <span className="font-semibold text-graphite">quando existe clareza, a execução flui.</span></p>
                            <p className="mt-4 text-base md:text-lg text-slate-600">A Consultoria X-Press nasceu para entregar essa clareza — de forma acessível, prática e honesta.</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
);

const ImplementationSection = () => (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
            <FadeIn>
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="font-serif text-3xl md:text-4xl text-center text-teal-dark font-bold">Sobre a Implementação</h2>
                    <p className="mt-6 text-base md:text-lg text-slate-600">Após a consultoria, você decide como executar o plano. Pode ser:</p>
                    <ul className="mt-6 text-base md:text-lg space-y-3 text-slate-700">
                        <li>● com equipe interna</li>
                        <li>● com fornecedores</li>
                        <li>● ou, se fizer sentido, comigo</li>
                    </ul>
                    <p className="mt-8 font-semibold bg-teal-primary/10 text-teal-dark p-4 rounded-lg text-base md:text-lg">A X-Press não é uma venda disfarçada. É um ponto de partida estratégico.</p>
                </div>
            </FadeIn>
        </div>
    </section>
);

const OfferSection = () => (
    <section id="oferta" className="py-16 sm:py-20 md:py-24 bg-smoke">
        <div className="container mx-auto px-6 max-w-7xl">
            <FadeIn>
                <div className="bg-graphite text-white p-8 md:p-12 rounded-xl shadow-2xl max-w-4xl mx-auto relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(https://picsum.photos/seed/growth-chart/1200/800)` }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-graphite/90 to-slate-800/90"></div>
                    <div className="relative z-10">
                        <div className="text-center mb-10">
                            <h3 className="text-xl md:text-2xl font-bold text-amber-400">💥 Oferta de Lançamento (por tempo limitado)</h3>
                            <p className="mt-2 text-slate-300 text-base md:text-lg">Garanta sua vaga com o valor especial e receba um plano de ação completo:</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <ul className="space-y-3 text-base md:text-lg text-slate-200">
                                <li className="flex items-start"><CheckIcon className="w-6 h-6 mr-3 text-teal-primary flex-shrink-0 mt-1" /><span>Direção estratégica de marketing e vendas no digital</span></li>
                                <li className="flex items-start"><CheckIcon className="w-6 h-6 mr-3 text-teal-primary flex-shrink-0 mt-1" /><span>Plano de ação prático em PDF</span></li>
                                <li className="flex items-start"><CheckIcon className="w-6 h-6 mr-3 text-teal-primary flex-shrink-0 mt-1" /><span>Apresentação do plano de ação ao vivo</span></li>
                                <li className="flex items-start"><CheckIcon className="w-6 h-6 mr-3 text-teal-primary flex-shrink-0 mt-1" /><span>Gravação da apresentação</span></li>
                                <li className="flex items-start"><CheckIcon className="w-6 h-6 mr-3 text-teal-primary flex-shrink-0 mt-1" /><span>Tira dúvidas</span></li>
                                <li className="flex items-start"><CheckIcon className="w-6 h-6 mr-3 text-teal-primary flex-shrink-0 mt-1" /><span>Direção pontual de ações de marketing</span></li>
                            </ul>
                            <div className="bg-slate-900/50 p-8 rounded-lg text-center border border-slate-700">
                                <p className="text-2xl text-slate-400 line-through">De R$247</p>
                                <p className="text-6xl font-bold text-white mt-1">por apenas R$97</p>
                                <div className="mt-8">
                                    <CTAButton
                                        href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Tenho%20interesse%20na%20Consultoria%20X-Press%20e%20gostaria%20de%20saber%20mais."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        size="large"
                                        showIcon={true}
                                    >
                                        QUERO A CONSULTORIA X-PRESS
                                    </CTAButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
);

const FinalCTASection = () => (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
            <FadeIn>
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="font-serif text-4xl md:text-5xl text-graphite">Se você quer parar de adivinhar e começar a <span className="text-teal-primary">decidir com estratégia</span>,</h2>
                    <p className="mt-6 text-base md:text-lg text-slate-600">👇 clique abaixo e fale comigo no WhatsApp:</p>
                    <div className="mt-10">
                        <CTAButton
                            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Tenho%20interesse%20na%20Consultoria%20X-Press%20e%20gostaria%20de%20saber%20mais."
                            target="_blank"
                            rel="noopener noreferrer"
                            size="large"
                            showIcon={true}
                        >
                            FALE COMIGO NO WHATSAPP
                        </CTAButton>
                        <p className="mt-4 text-slate-600">Ainda tem dúvidas? Fale comigo sem compromisso.</p>
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
);

const FaqSection = () => (
    <section className="py-16 sm:py-20 md:py-24 bg-smoke">
        <div className="container mx-auto px-6 max-w-7xl">
            <FadeIn>
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-serif text-3xl md:text-4xl text-center text-teal-dark font-bold">Dúvidas Frequentes sobre a Consultoria X-Press</h2>
                    <div className="mt-12 space-y-4">
                        <FaqItem question="“Quero um gestor de tráfego. Você faz isso?”">
                            <p>Sim! Mas antes de colocar dinheiro em anúncios, é importante ter clareza sobre o que comunicar, pra quem e com qual objetivo. É por isso que recomendo começar pela Consultoria X-Press — ela funciona como um diagnóstico estratégico, ideal pra quem ainda não tem processos claros entre marketing e vendas. Depois dela, posso sim atuar como gestor de tráfego ou coordenar a execução completa, se fizer sentido pro seu caso.</p>
                            <p>👉 Me chama no WhatsApp que te explico qual caminho é melhor pra você.</p>
                        </FaqItem>
                        <FaqItem question="“A Consultoria X-Press é tipo um plano de negócios?”">
                            <p>Não. Ela é muito mais prática e direta. O que você vai receber é um plano de ação estratégico e aplicável, não um documento de 20 páginas cheio de teoria. Eu realmente mergulho no seu negócio, pesquiso o mercado, analiso seu posicionamento e valido algumas hipóteses pra entregar um direcionamento com consistência. Mas tudo de forma objetiva, personalizada e voltada pra gerar resultado rápido.</p>
                        </FaqItem>
                        <FaqItem question="“É uma consultoria em grupo?”">
                            <p>Não, é individual e personalizada. A consultoria é feita 1 a 1, comigo, em um formato enxuto e direto. Você não vai cair em um grupo genérico, nem receber respostas automáticas. É uma conversa estratégica pra entender onde o seu negócio está travando e o que precisa mudar.</p>
                        </FaqItem>
                        <FaqItem question="“O que exatamente eu recebo?”">
                            <p>Você recebe:</p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li>Um diagnóstico personalizado do seu marketing e processo comercial;</li>
                                <li>Um plano de ação com recomendações claras e prioridades de curto prazo;</li>
                                <li>Uma call ao vivo comigo pra apresentar tudo, tirar dúvidas e alinhar próximos passos.</li>
                            </ul>
                            <p className="mt-4">É uma consultoria rápida, mas com intensidade. Eu realmente coloco energia pra entender o seu negócio e te devolver um plano sólido.</p>
                        </FaqItem>
                        <FaqItem question="“Qual o prazo de entrega?”">
                            <p>Entre 3 e 5 dias úteis após o preenchimento do briefing. Nesse período, eu faço a análise, crio o plano e agendamos a call pra apresentar tudo.</p>
                        </FaqItem>
                        <FaqItem question="“E se eu quiser te contratar pra executar depois?”">
                            <p>Perfeito — é o caminho ideal. A X-Press é justamente o primeiro passo antes da execução. Depois que você tiver o plano validado, posso assumir o tráfego pago, automações, funil, CRM, Google Meu Negócio, gestão de influenciadores ou o que fizer mais sentido.</p>
                            <p>A ideia é simples: primeiro, clareza. Depois, ação.</p>
                        </FaqItem>
                        <FaqItem question="“Por que a Consultoria X-Press custa só R$97?”">
                            <p>Porque é o valor de lançamento e validação do formato. Normalmente, uma consultoria personalizada desse tipo custaria R$247 ou mais, mas decidi liberar um valor simbólico por tempo limitado. É uma forma de você testar a metodologia, ganhar visão de negócio e sair com um plano pronto — gastando pouco e com orientação de quem já vive o marketing na prática.</p>
                        </FaqItem>
                        <FaqItem question="“Você trabalha só com empresas pequenas?”">
                            <p>Não. Eu já atendi desde negócios locais e autônomos até empresas que faturam mais de 1 milhão por mês. O ponto em comum entre todos é o mesmo: falta de clareza sobre o que fazer pra vender mais. E é exatamente isso que a Consultoria X-Press resolve.</p>
                        </FaqItem>
                        <FaqItem question="“Sou iniciante. Isso serve pra mim?”">
                            <p>Serve — e talvez seja o melhor ponto de partida. Se você está começando e quer entender como atrair, converter e fidelizar clientes, a consultoria vai te dar o mapa. Você não precisa de uma agência cara agora. Precisa de direção certa, e é isso que a X-Press entrega.</p>
                        </FaqItem>
                        <FaqItem question="“Vou começar um negócio do zero agora. Você pode me ajudar?”">
                            <p>Sim! Inclusive, a X-Press é o caminho mais seguro para quem está começando. O maior erro de quem tira um projeto do papel é gastar energia e verba nos canais errados. Na consultoria, eu vou te entregar um plano de ação prático para que seu investimento inicial — seja ele pequeno ou robusto — seja direcionado para onde traz retorno real. Vamos estruturar sua comunicação e definir os canais de venda que fazem mais sentido para o seu cenário atual.</p>
                            <p>O objetivo aqui não é "gastar pouco", mas sim investir com inteligência para que você não precise contar com a sorte nas suas primeiras vendas.</p>
                        </FaqItem>
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
);


const Footer = () => (
    <footer className="bg-graphite text-center text-slate-400 py-8">
        <p>© {new Date().getFullYear()} Ramon Bordoni. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Consultoria Estratégica de Marketing Digital</p>
    </footer>
);


const App: React.FC = () => {
    return (
        <div className="bg-smoke">
            <main>
                <HeroHeader />
                <ProblemScenariosSection />
                <MarketingDecisionSection />
                <LookingForSection />
                <ProcessSection />
                <BeforeAfterSection />
                <XPressConsultancySection />
                <HowItWorksSection />
                <DeliverablesSection />
                <DisclaimerSection />
                <AboutMeSection />
                <ImplementationSection />
                <OfferSection />
                <FinalCTASection />
                <FaqSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;
