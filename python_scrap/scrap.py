import requests

from parsel import Selector

headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "max-age=0",
    "sec-ch-ua": '"Not A(Brand";v="99", "Brave";v="121", "Chromium";v="121"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Linux"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "sec-gpc": "1",
    "upgrade-insecure-requests": "1",
    "cookie": "lolg_euconsent=nitro; languageBanner_en_count=6",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36",
}


def anthony(name, tag):
    get = requests.get(
        f"https://api.antonyz.tk/lol/rank?name={name}&tag={tag}&r=BR&lang=pt"
    )

    return 0


def graphs():

    url = "https://www.leagueofgraphs.com/pt/summoner/br/Ayel-0001"
    res = requests.get(url, headers=headers).text
    sel = Selector(text=res)
    element = sel.css("span.leaguePoints::text").getall()[1]
    print(element)

    pass


if __name__ == "__main__":
    # name = input("name: ")
    # tag = input("name: ")
    # print(anthony(name, tag))
    graphs()
