<?php

namespace Kirby\Search;

// Kirby dependencies
use Kirby\Cms\Pagination;
use Kirby\Cms\Collection;

/**
 * Collection wrapper for search results
 *
 * @author Lukas Bestle <lukas@getkirby.com>
 * @author Nico Hoffmann <nico@getkirby.com>
 * @license MIT
 * @link https://getkirby.com
 */
class Results extends Collection
{

    // Result metadata
    protected $totalCount;
    protected $processingTime;
    protected $searchQuery;
    protected $params;

    /**
     * Class constructor
     *
     * @param array $results Returned data from an search operation
     */
    public function __construct(array $results)
    {
        // Convert the hits to model objects
        $hits = array_map([$this, 'toModel'], $results['hits'] ?? []);

        // Remove hits that could not be converted
        $hits = array_filter($hits, function($hit) {
            return is_object($hit) === true;
        });

        // Store the results
        parent::__construct($hits);
        $this->totalCount = $results['total'] ?? 0;

        // Paginate the collection
        $this->pagination = new Pagination([
            'page'  => $results['page'] ?? 1,
            'total' => $results['total'] ?? 0,
            'limit' => $results['limit'] ?? 20,
        ]);

    }

    /**
     * Converts Algolia result hit to model
     *
     * @param array $hit
     * @return \Kirby\Cms\ModelWithContent
     */
    protected function toModel(array $hit)
    {
        switch ($hit['_tags']) {
            case 'pages':
                return kirby()->page($hit['objectID']);
            case 'files':
                return kirby()->file($hit['objectID']);
            case 'users':
                return kirby()->user($hit['objectID']);
        }
    }

    /**
     * Returns the total count of results for the search query
     * $results->count() returns the count of results
     * on the current pagination page
     *
     * @return int
     */
    public function totalCount(): int
    {
        return $this->totalCount;
    }
}
