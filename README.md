# any body got a map? [📍](https://staff.washington.edu/bryantl2)

***

A final, exploratory project by L.P. Bryant for Ben Lee (LIS598: Computing Cultural Heritage WI25).

<i>any body got a map?</i> takes the form of a zine, replicating a tried-and-true medium of homosexual communication, viewable as [an online interactive](https://staff.washington.edu/bryantl2) (recommended), and as an accessible, static file.

***

### setting the scene

<i>any body got a map?</i> explores and questions the role of mapping in exploring "queer" geographies. [Source datasets](4-FullVerifiedDatasets) for this project came from [Mapping the Gay Guides](https://github.com/MappingtheGayGuides), a project by Drs. Amanda Regan and Eric Gonzaba of Clemson University, in collaboration with California State University, Fullerton and funded by the National Endowment for the Humanities. [1]

Mapping the Gay Guides visualizes information from the "Damron Guides," the colloquial name for the <i>Bob Damron Address Books</i>, a series of gay travel guides first published in 1964 by bar owner and amateur biographer Bob Damron. [2] Damron's collocation and collection of homosexual folk knowledge, as well as popular events, made the <i>Address Books</i> a crucial part of the nascent American homosexual identity which would reach the mainstream in the 1960s and 1970s. [3] Though he included indicators in his books for homosexuals of all kinds, Damron focused primarily on amenities and activites for white, male homosexuals. [4] Ironically, he based his <i>Address Books</i> on the "green books" which came about in the Reconstruction Era South, originally designed to help Black Americans find safe community spaces and restaurants during Jim Crow. [5]

Eminently successful, by 1988, Damron's publishing company sold more than 100,00 copies of the <i> Address Books</i> a year. [6] The commercialization of the internet led to the shuttering of the project in the early 2000s.

#### a quick note on terminology

The <i>Address Books</i>, for fear of censorship and self-protection, do not mention any homosexual self-identification, such as "gay," "lesbian," initialisms, or similar. They are used here both to retain the historic character of Damron's intent (being gay himself), and the nature of those identities. Wherever possible, "gay," "lesbian," "bisexual," and "transgender" identities will be indicated as such and in those terms.

***

### scope & rationale

Given the scope of this project as compared to its source, only the fully "cleaned and verified" datasets published for the 1988 Damron Guides are used here as proof of concept. The 1988 dataset, despite being cleaned and verified, does not have its full dataset represented by the Mapping the Gay Guides project website, however. <i>any body got a map?</i> identifies and leverages this gap between "usable" but not "presentable" data.

The datasets compiled for Mapping the Gay Guides contain geocoded locations suitable for GIS or similar mapping software, in line with the visualization deliverable published by the project. <i>any body got a map?</i> manipulates, permutes, and conforms this data into different visualizations in line with data subsets or slices indicated in methodology below.

***

### methodology

The 1988 dataset was processed using a combination of spreadsheet software (Sheets, Excel) as well as the [pandas](https://pandas.pydata.org/) and [NumPy](https://numpy.org/) libraries in Python.

Data slices and subsequent subsets were externalized then mapped, visualized, or otherwise charted using [Datawrapper](https://www.datawrapper.de/) and [QGIS](https://qgis.org/).

All additional data is cited per visualization and includes information from [Queering the Map](https://www.queeringthemap.com/) and [United States Bureau of Labor Statistics](https://www.bls.gov/opub/reports/womens-earnings/2023/).

This information was then compiled, processed, and interpreted into zine format using alienmelon's Electric Zine Maker, and hosted at University of Washington servers via aesop.

***

### the process & reflection

Geocoded/map data is surprisingly difficult to transform. Each location (row) contained highly specific data which made selecting the scope of each visualization immense for this project. In attemping to permute not just a dataset, but a dataset that had already been cleaned and tailored to fit a specific kind of visualization, I had to somewhat work backwards, and reimagine its purpose.

Much of the work around each visualization concerned isolating subsets of data based on certain criteria. While only three visualizations were chosen for the final deliverable, many iterations of these visualizations were considered. Major designs considered, but unused, in the project include visualizations based on U.S. states where specific locations occurred; territories and extra-continental locations; Seattle-specific data slices; and rural locations.

In effect, taking tailored data and unmaking it in turn made the data "nonsense." Making sense of nonsense was then the goal of each visualization, and its greatest challenge. Many in-progress iterations of the visualizations played on this "queering" concept, not using the "data" as the answer, but the chart of the data as the data itself. That problematizes both the purpose of "mapping," and even constructing data as a useful, directive piece of information.

This latter point is a continuing piece of conflict for me as the author. As an academic I endeavor to communicate concepts clearly and iteratively. Making a self-contained, undirected, and at times, strange answer to an academic question was not in my comfort zone. And while the information, and [computer sciences especially](https://archive.org/details/generic-remove), have an established legacy of pushing these academic boundaries, it's not something I have ever done in a meaningful way.

I still wonder, even after completing this project, whether it lives up to its goals. There was a point when I had a sort of existential dread about turning this in and making this the capstone of my work in this class. It's not perfect, or even exactly robust. What will the teaching team think? It is those things, yes; but it's also honest and sincere, if not bizarre. 

I wondered while I made this whether it would be more embarrassing to submit this work the way it is, or to back down and create an "actual" academic thing. I am still wondering whether I made the right choice as I put the final, polished characters in this file. It is my hope that this project can at least speak for itself, which is to say, be honest in its intentions. And then, maybe, wonder if anybody really does know how to get around this place. I, for one, could use a map.

***

### thank you & further reading

You can find the sources consulted for this project indicated [as endnotes here](works_cited), both for this file and the zine pages themselves.

A big, delicious thank you to the folks at [Electric Zine Maker](https://alienmelon.itch.io/electric-zine-maker) on itch.io.

The original license ([MIT](LICENSE)), instructions, and dedications from Jeremy Duber are retained in [credits](credits) for clarity and transparency! This software is reproduced for personal, non-commercial use, and with express citation of its creators.
